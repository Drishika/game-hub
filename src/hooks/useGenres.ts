import { useEffect, useState } from 'react';
import { FetchGenres, Genre } from '../services/genre-service';
import { AxiosError, CanceledError } from 'axios';
import create from '../services/genre-service';

const useGenre = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = create.getAll<FetchGenres>();
    request
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err: AxiosError) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => cancel();
  }, []);
  return { genres, isLoading, error };
};

export default useGenre;
