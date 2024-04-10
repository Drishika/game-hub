import { Heading } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import usePlatforms from '../hooks/usePaltforms';
import useGameQueryStore from '../store';


const GameHeading = () => {

  const selectedGenreId = useGameQueryStore(s=>s.gameQuery.genreId);
  const { data: genres } = useGenres();
  const selectedPlatformId = useGameQueryStore(s=>s.gameQuery.platformId);
  const { data: platforms } = usePlatforms();

  const genre = genres?.results.find((g) => g.id === selectedGenreId);
  const platform = platforms?.results.find(
    (p) => p.id === selectedPlatformId
  );
  const heading = `${platform || ''} ${genre?.name || ''} Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
