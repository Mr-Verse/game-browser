import { useData } from "./useData";

interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

export const useGenres = () => {
  const { data: genres, error, isLoading } = useData<Genre>("/genres");

  return { genres, error, isLoading };
};
