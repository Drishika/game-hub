import useData from './useData';

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

const useGames = () => useData<Game>('/games');
export default useGames;
