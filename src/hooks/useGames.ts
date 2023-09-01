import { useData } from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  parent_platforms: { platform: Platform }[];
}

export function useGames(selectedGenre: Genre | null) {
  const {
    data: games,
    error,
    isLoading,
  } = useData<Game>("/games", { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);
  return { games, error, isLoading };
}
