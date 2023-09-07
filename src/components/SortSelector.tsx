import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";

interface Props {
  onSelectSort: (sort: string) => void;
  selectedSort: string;
}

const SortSelector = ({ onSelectSort, selectedSort }: Props) => {
  const sortSelections = [
    { label: "Relevance", value: "" },
    { label: "Name", value: "name" },
    { label: "Released Date", value: "released" },
    { label: "Created", value: "created" },
    { label: "Updated", value: "updated" },
    { label: "Average Rating", value: "rating" },
    { label: "MetaCritic", value: "metacritic" },
  ];

  const currentSort = sortSelections.find(
    (sort) => sort.value === selectedSort
  )?.label;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaChevronDown />}>
        Order By: {currentSort || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortSelections.map((sort) => (
          <MenuItem key={sort.label} onClick={() => onSelectSort(sort.value)}>
            {sort.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
