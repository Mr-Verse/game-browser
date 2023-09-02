import { useData } from "./useData";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

export const usePlatforms = () => {
  const { data: platforms, error } = useData<Platform>(
    "/platforms/lists/parents"
  );

  return { platforms, error };
};
