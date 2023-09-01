import {
  ListItem,
  Image,
  List,
  HStack,
  Text,
  Spinner,
  Button,
} from "@chakra-ui/react";
import { useGenres } from "../hooks/useGenres";
import { getCroppedImageUrl } from "../services/imageUrl";
import { Genre } from "../hooks/useGenres";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { genres, error, isLoading } = useGenres();

  return (
    <>
      {error && <Text>{error}</Text>}
      {isLoading && <Spinner color="dodgerblue" />}
      <List listStyleType="none" spacing={2}>
        {genres.map((genre) => (
          <ListItem key={genre.id}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius="8px"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                fontSize="lg"
                variant="link"
                whiteSpace="pre-wrap"
                textAlign="start"
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
