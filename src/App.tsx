import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, md: `"nav nav" "aside main"` }}
    >
      <GridItem as="nav" area="nav">
        <NavBar />
      </GridItem>
      <Show above="md">
        <GridItem as="aside" area="aside" bg="gold">
          Aside
        </GridItem>
      </Show>
      <GridItem as="main" area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
