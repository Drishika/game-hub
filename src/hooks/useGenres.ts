import genres from '../data/Genres';

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

// use below to get data from back end
//const useGenres = () => useData<Genre>('/genres');

// use below to static shipment of genres
const useGenres = () => ({ data: genres, isLoading: false, error: null });

export default useGenres;
