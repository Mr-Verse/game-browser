import {
  ListItem,
  Image,
  List,
  HStack,
  Text,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import { useGenres } from "../hooks/useGenres";
import { getCroppedImageUrl } from "../services/imageUrl";
import { Genre } from "../hooks/useGenres";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { genres, error, isLoading } = useGenres();

  return (
    <>
      <Heading fontSize="2xl" mb="3">
        Genres
      </Heading>
      {error && <Text>{error}</Text>}
      {isLoading && <Spinner color="dodgerblue" />}
      <List listStyleType="none" spacing={2}>
        {genres.map((genre) => (
          <ListItem
            key={genre.id}
            borderRadius="10px"
            p={1}
            bg={genre.id === selectedGenre?.id ? "blackAlpha.200" : ""}
          >
            <HStack>
              <Image
                boxSize="32px"
                objectFit="cover"
                borderRadius="8px"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                fontSize="lg"
                variant="link"
                whiteSpace="normal"
                textAlign="start"
                textDecoration={
                  genre.id === selectedGenre?.id ? "underline" : "none"
                }
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                px={2}
                py={1}
                onClick={() => onSelectGenre(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
