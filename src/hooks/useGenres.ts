import { useQuery } from '@tanstack/react-query';
import apiClient, { FetchResponse } from '../services/api-client';

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
// const useGenres = () => ({ data: genres, isLoading: false, error: null });

const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>('/genres').then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24 hours
    initialData: {count: genres.length, results: genres}
  });

export default useGenres;
