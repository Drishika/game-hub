import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
  Text,
  Image,
} from '@chakra-ui/react';
import { Game } from '../services/games-service';

interface Prop {
  game: Game;
}

const GameCard = ({ game }: Prop) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={game.background_image} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{game.name}</Heading>
          <Text>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design
            with a sprinkle of vintage design.
          </Text>
          <Text color="blue.600" fontSize="2xl">
            $450
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default GameCard;
