
import { Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';

const GamesList = () => {
  const {games, loading, error} = useGames();
  return (
    <>
    {error && <Text>{error}</Text>}
    <ul>{games && games.map((game) => <li key={game.id}>{game.name}</li>)}</ul>
    </>
  );
};

export default GamesList;
