import { GameQuery } from "../App";
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

export function useGames(gameQuery: GameQuery) {
  const {
    data: games,
    error,
    isLoading,
  } = useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery?.sort,
      },
    },
    [gameQuery]
  );
  return { games, error, isLoading };
}
