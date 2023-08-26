import { Flex, Show, Heading, Input, Image } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <Flex alignItems={"center"} justifyContent={"space-between"} px={"10px"}>
      <Flex alignItems={"center"}>
        <Image src={logo} boxSize="48px"></Image>
        <Show above="md">
          <Heading as="h1" whiteSpace={"nowrap"} size={{ base: "md" }}>
            Game Browser
          </Heading>
        </Show>
      </Flex>
      <Input placeholder="Search" m={2} maxW={"xl"} flexShrink={5}></Input>
      <ColorModeSwitch />
    </Flex>
  );
};

export default NavBar;
