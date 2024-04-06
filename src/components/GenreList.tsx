import {
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
  Button,
  Heading,
} from '@chakra-ui/react';

import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

interface Prop {
  handleSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, handleSelectGenre }: Prop) => {
  const { data, error, isLoading } = useGenres();

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
                  fontWeight={selectedGenre?.id === genre.id ? 'bold' : ''}
                  onClick={() => handleSelectGenre(genre)}
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
