import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Prop {
  children: ReactNode;
}
const GameCardContainer = ({ children }: Prop) => {
  return (
    <Box width="100%" borderRadius="10px" overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
