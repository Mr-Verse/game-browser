import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup maxW="2xl">
      <InputLeftElement pointerEvents="none" children={<BsSearch />} />
      <Input
        placeholder="Search.."
        borderRadius="12px"
        variant="filled"
      ></Input>
    </InputGroup>
  );
};

export default SearchInput;
