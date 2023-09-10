import { MdOutlineDarkMode } from "react-icons/md";
import { HStack, Show, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <MdOutlineDarkMode size="25" />
      <Show above="sm">
        <Text whiteSpace={"nowrap"}>Dark Mode</Text>
      </Show>
      <Switch
        size={"md"}
        colorScheme="telegram"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
    </HStack>
  );
};

export default ColorModeSwitch;
