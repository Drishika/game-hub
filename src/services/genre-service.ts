import create from './http-service';

export interface FetchGenres {
  count: number;
  next: string;
  prev: string;
  results: Genre[];
}

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

export default create('/genres');
