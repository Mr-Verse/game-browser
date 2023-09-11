import platformsStatic from "../data/platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export const usePlatforms = () => {
  // const { data: platforms, error } = useData<Platform>(
  //   "/platforms/lists/parents"
  // );
  const { data: platforms, error } = { data: platformsStatic, error: "" };

  return { platforms, error };
};
