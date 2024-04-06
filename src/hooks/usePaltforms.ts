import { useQuery } from '@tanstack/react-query';

import apiClient, { FetchResponse } from '../services/api-client';


export interface Platform {
  id: number;
  name: string;
  slug: string;
}

//const usePlatforms = () => useData<Platform>('/platforms/lists/parents');

const usePlatforms = () => 
  useQuery({
    queryKey: ['platforms'],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>('/platforms/lists/parents')
        .then((res) => res.data),
  });


export default usePlatforms;
