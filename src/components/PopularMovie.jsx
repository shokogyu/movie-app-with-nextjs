import { EmblaCarousel } from "@/components/EmblaCarousel";
import { useFetchData } from "@/hooks/useFetchData";
import { TMDB_API_URL } from "@/utils/const";

export const PopularMovie = () => {
  const { data } = useFetchData(`${TMDB_API_URL}/movie/popular`);

  return (
    <div>
      <h2 className="text-white">人気の映画</h2>
      <EmblaCarousel items={data?.results} />
    </div>
  );
};
