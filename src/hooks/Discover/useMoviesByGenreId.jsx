import { useFetchData } from "@/hooks/useFetchData";
import { TMDB_API_URL } from "@/utils/const";
import { useRouter } from "next/router";

export function useMoviesByGenreId() {
  const router = useRouter();

  const { data, error, isLoading } = useFetchData(
    router.query.id
      ? `${TMDB_API_URL}/discover/movie?page=1&sort_by=popularity.desc&include_adult=false&with_genres=${router.query.id}`
      : null
  );

  return { data, error, isLoading };
}
