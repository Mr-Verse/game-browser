import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      width={{ base: "100%", md: "320px", lg: "300px", xl: "300px" }}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
