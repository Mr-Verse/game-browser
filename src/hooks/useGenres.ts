import staticGenres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

export const useGenres = () => {
  // const { data: genres, error, isLoading } = useData<Genre>("/genres");
  const {
    data: genres,
    error,
    isLoading,
  } = {
    data: staticGenres,
    error: null,
    isLoading: false,
  };

  return { genres, error, isLoading };
};
