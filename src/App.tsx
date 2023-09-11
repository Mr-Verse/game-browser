import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sort: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
  //   null
  // );

  const handleSelectedGenre = (genre: Genre) =>
    setGameQuery({ ...gameQuery, genre });

  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, md: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", md: "200px 1fr" }}
    >
      <GridItem as="nav" area="nav">
        <NavBar onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText: searchText })} />
      </GridItem>
      <Show above="md">
        <GridItem as="aside" area="aside" p={2}>
          <GenreList
            onSelectGenre={handleSelectedGenre}
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>
      <GridItem as="main" area="main" p={2}>
        <HStack spacing={2} mb={3}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) => {
              if (gameQuery.platform !== platform)
                setGameQuery({ ...gameQuery, platform });
            }}
          />
          <SortSelector
            onSelectSort={(sort) => {
              if (gameQuery.sort !== sort) setGameQuery({ ...gameQuery, sort });
            }}
            selectedSort={gameQuery.sort}
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
