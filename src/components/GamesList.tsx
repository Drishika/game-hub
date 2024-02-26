import React, { useEffect, useState } from 'react';
import create, { FetchGames, Game } from '../services/games-service';
import { AxiosError, CanceledError } from 'axios';
import { Text } from '@chakra-ui/react';

const GamesList = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = create.getAll<FetchGames>();
    request
      .then((res) => {
        console.log('Count is ' + res.data.count);
        console.log('Data is ' + res.data.results);
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
  return (
    <>
    {error && <Text>{error}</Text>}
    <ul>{games && games.map((game) => <li key={game.id}>{game.name}</li>)}</ul>
    </>
  );
};

export default GamesList;
