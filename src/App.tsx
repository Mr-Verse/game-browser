import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, md: `"nav nav" "aside main"` }}
    >
      <GridItem as="nav" area="nav">
        <NavBar />
      </GridItem>
      <Show above="md">
        <GridItem as="aside" area="aside">
          Aside
        </GridItem>
      </Show>
      <GridItem as="main" area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
