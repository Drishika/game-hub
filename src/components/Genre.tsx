import useGenre from '../hooks/useGenres';
import { Text } from '@chakra-ui/react';

const Genre = () => {
  const { genres, error, isLoading } = useGenre();
  return (
    <>
      {genres &&
        genres.map((genre) => <Text key={genre.id}>{genre.name}</Text>)}
    </>
  );
};

export default Genre;
