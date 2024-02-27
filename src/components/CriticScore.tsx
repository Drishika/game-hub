import { Badge } from '@chakra-ui/react';

interface Prop {
  score: number;
}

const CriticScore = ({ score }: Prop) => {
  const color = score > 75 ? 'green' : score > 60 ? 'yellow' : '';
  return (
    <Badge colorScheme={color} borderRadius="4px" fontSize="14px" paddingX={2}>
      {score}
    </Badge>
  );
};

export default CriticScore;
