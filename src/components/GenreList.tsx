import {
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
  Button,
  Heading,
} from '@chakra-ui/react';

import useGenres  from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import useGameQueryStore from '../store';


const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  const setSelectedGenreId = useGameQueryStore(s=> s.setGenreId);
  const selectedGenreId = useGameQueryStore(s=> s.gameQuery.genreId);
  if (isLoading) return <Spinner></Spinner>;
  if (error) return null;

  return (
    <>
    <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
      {data && (
        <List>
          {data.results.map((genre) => (
          
            <ListItem key={genre.id} paddingY="5px">
              <HStack>
                <Image
                  boxSize="32px"
                  borderRadius={8}
                  objectFit='cover'
                  src={getCroppedImageUrl(genre.image_background)}
                ></Image>
                <Button
                  fontSize="lg"
                  variant="link"
                  whiteSpace="normal"
                  textAlign="left"
                  fontWeight={selectedGenreId === genre.id ? 'bold' : ''}
                  onClick={() => setSelectedGenreId(genre.id)}
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};

export default GenreList;
