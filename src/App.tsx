import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react';
import './App.css';
import Navbar from './components/Navbar';
import GamesList from './components/GamesList';
import GenreList from './components/GenreList';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';
import GameHeading from './components/GameHeading';



function App() {

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{ base: '1fr', lg: '200px 1fr' }}
    >
      <GridItem area="nav">
        <Navbar/>
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList/>
        </GridItem>
      </Show>

      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector/>
            </Box>
            <SortSelector/>
          </Flex>
        </Box>
        <GamesList></GamesList>
      </GridItem>
    </Grid>
  );
}

export default App;
