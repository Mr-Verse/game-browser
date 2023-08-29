import { useData } from "./useData";

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

export function useGames() {
  const { data: games, error, isLoading } = useData<Game>("/games");
  return { games, error, isLoading };
}
