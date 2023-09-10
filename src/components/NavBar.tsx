import { Flex, Show, Heading, Image } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <Flex alignItems={"center"} px={"10px"} alignContent="space-between">
      <Flex alignItems={"center"} flexShrink={0}>
        <Image src={logo} boxSize="48px"></Image>
        <Show above="md">
          <Heading as="h1" whiteSpace="nowrap" size={{ base: "md" }}>
            Game Browser
          </Heading>
        </Show>
      </Flex>
      <Flex m={2} w="100%" justifySelf="center" justifyContent="center">
        <SearchInput />
      </Flex>
      <ColorModeSwitch />
    </Flex>
  );
};

export default NavBar;
