import { useQuery } from '@tanstack/react-query';
import ApiClient from '../services/api-client';




export interface Platform {
  id: number;
  name: string;
  slug: string;
}

//const usePlatforms = () => useData<Platform>('/platforms/lists/parents');
const apiClient = new ApiClient<Platform>('/platforms/lists/parents');
const usePlatforms = () => 
  useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll
      /*apiClient
        .get<FetchResponse<Platform>>('/platforms/lists/parents')
        .then((res) => res.data),*/
  });


export default usePlatforms;
