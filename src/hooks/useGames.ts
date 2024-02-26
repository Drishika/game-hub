import { useEffect, useState } from 'react';
import { FetchGames, Game } from '../services/games-service';
import { AxiosError, CanceledError } from 'axios';
import create from '../services/games-service';

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = create.getAll<FetchGames>();
    request
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err: AxiosError) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => cancel();
  }, []);
  return { games, loading, error };
};

export default useGames;
