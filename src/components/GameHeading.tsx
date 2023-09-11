import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  let heading;
  if (!gameQuery.searchText && !gameQuery.platform && !gameQuery.genre)
    heading = "All Games";
  else if (gameQuery.searchText) {
    heading = `Search Results for ${gameQuery.searchText}..`;
  } else {
    heading = `${gameQuery.platform?.name || ""} ${
      gameQuery.genre?.name || ""
    } Games`;
  }

  return <Heading as="h2">{heading}</Heading>;
};

export default GameHeading;
