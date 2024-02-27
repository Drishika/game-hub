import create from './http-service';

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
}

export interface FetchGames {
  count: number;
  next: string;
  prev: string;
  results: Game[];
}

export default create('/games');
