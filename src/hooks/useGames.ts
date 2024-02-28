import useData from './useData';
import { Genre } from './useGenres';

export interface Platform {
  id: number;
  slug: string;
  name: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[]; // Array of platform objects with property platform
  metacritic: number;
}

const useGames = (queryParam: Genre | null) =>
  useData<Game>('/games', { params: { genres: queryParam?.id } }, [
    queryParam?.id,
  ]);
export default useGames;
