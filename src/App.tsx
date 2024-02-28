import { Grid, GridItem, Show } from '@chakra-ui/react';
import './App.css';
import Navbar from './components/Navbar';
import GamesList from './components/GamesList';
import Genre from './components/GenreList';

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
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <Genre />
        </GridItem>
      </Show>

      <GridItem area="main">
        <GamesList></GamesList>
      </GridItem>
    </Grid>
  );
}

export default App;
