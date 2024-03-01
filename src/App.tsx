import { Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import './App.css';
import Navbar from './components/Navbar';
import GamesList from './components/GamesList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import GenreList from './components/GenreList';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/useGames';
import SortSelector from './components/SortSelector';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchInput?: string;
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{ base: '1fr', lg: '200px 1fr' }}
    >
      <GridItem area="nav">
        <Navbar
          onSearchSubmit={(searchInput) =>
            setGameQuery({ ...gameQuery, searchInput })
          }
        />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={gameQuery.genre}
            handleSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>

      <GridItem area="main">
        <HStack spacing={5} paddingLeft={2} marginBottom={5}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onPlatformSelect={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <SortSelector
            currentSortField={gameQuery.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
        </HStack>
        <GamesList gameQuery={gameQuery}></GamesList>
      </GridItem>
    </Grid>
  );
}

export default App;
