import { Text } from '@chakra-ui/react';

import useGenres from '../hooks/useGenres';

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  return (
    <>{data && data.map((genre) => <Text key={genre.id}>{genre.name}</Text>)}</>
  );
};

export default GenreList;
