import { Grid, GridItem, Show } from '@chakra-ui/react';
import './App.css';
import Navbar from './components/Navbar';
import GamesList from './components/GamesList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import GenreList from './components/GenreList';

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  function handleSelectGenre(genre: Genre) {
    setSelectedGenre(genre);
  }
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
          <GenreList handleSelectGenre={handleSelectGenre}  />
        </GridItem>
      </Show>

      <GridItem area="main">
        <GamesList selectedGenre={selectedGenre}></GamesList>
      </GridItem>
    </Grid>
  );
}

export default App;
