import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, md: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", md: "200px 1fr" }}
    >
      <GridItem as="nav" area="nav">
        <NavBar />
      </GridItem>
      <Show above="md">
        <GridItem as="aside" area="aside" p={2}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem as="main" area="main" p={2}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
