import {
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
  Button,
} from '@chakra-ui/react';

import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

interface Prop {
  handleSelectGenre : (genre: Genre) => void;
}

const GenreList = ({handleSelectGenre}:Prop) => {
  const { data, error, isLoading } = useGenres();
  if (isLoading) return <Spinner></Spinner>;
  if (error) return null;
  return (
    <>
      {data && (
        <List>
          {data.map((genre) => (
            <ListItem key={genre.id} paddingY="5px">
              <HStack>
                <Image
                  boxSize="32px"
                  borderRadius={8}
                  src={getCroppedImageUrl(genre.image_background)}
                ></Image>
                <Button
                  fontSize="lg"
                  variant="link"
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
