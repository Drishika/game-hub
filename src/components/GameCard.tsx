import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  HStack,
} from '@chakra-ui/react';
import { Game } from '../services/games-service';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';

interface Prop {
  game: Game;
}

const GameCard = ({ game }: Prop) => {
  return (
    <Card maxW="sm" borderRadius='10px'>
      <CardBody>
        <Image src={game.background_image} borderRadius="lg" />
        <Heading size="md">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
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
