import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
    className="form--centered"
      onSubmit={(e) => {
        e.preventDefault();
        if (inputRef.current) onSearch(inputRef.current?.value);
      }}
    >
      <InputGroup maxW="2xl">
        <InputLeftElement pointerEvents="none" children={<BsSearch />} />
        <Input
          ref={inputRef}
          placeholder="Search.."
          borderRadius="12px"
          variant="filled"
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
