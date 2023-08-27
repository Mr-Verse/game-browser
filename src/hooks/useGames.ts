import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { AxiosError, CanceledError } from "axios";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

export function useGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((e) => {
        if (e instanceof CanceledError) return;
        setError((e as AxiosError).message);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return { games, error };
}
