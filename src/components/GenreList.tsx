import { ListItem, Image, List, HStack, Text } from "@chakra-ui/react";
import { useGenres } from "../hooks/useGenres";
import { getCroppedImageUrl } from "../services/imageUrl";

const GenreList = () => {
  const { genres } = useGenres();

  return (
    <List listStyleType="none" spacing={2}>
      {genres.map((genre) => (
        <ListItem key={genre.id}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius="8px"
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
