import create from './http-service';

export interface Game {
  id: number;
  name: string;
  background_image: string;
}

export interface FetchGames {
  count: number;
  next: string;
  prev: string;
  results: Game[];
}

export default create('/games');
