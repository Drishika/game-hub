import { useQuery } from '@tanstack/react-query';
import { Platform } from './usePaltforms';
import ApiClient, { FetchResponse } from '../services/api-client';
import useGameQueryStore from '../store';

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[]; // Array of platform objects with property platform
  metacritic: number;
  rating_top: number;
}

const apiClient = new ApiClient<Game>('/games');
const useGames = () =>{
  const gameQuery = useGameQueryStore(s=>s.gameQuery);
  return useQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery?.genreId,
          parent_platforms: gameQuery?.platformId,
          ordering: gameQuery?.sortOrder,
          search: gameQuery?.searchText,
        },
      }),
  });
}
export default useGames;
