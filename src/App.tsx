import { Grid, GridItem, Show } from '@chakra-ui/react';
import './App.css';
import Navbar from './components/Navbar';
import GamesList from './components/GamesList';
import Genre from './components/Genre';

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside"><Genre/></GridItem>
      </Show>

      <GridItem area="main">
        <GamesList></GamesList>
      </GridItem>
    </Grid>
  );
}

export default App;
