import { EmblaCarousel } from "@/components/EmblaCarousel";
import { useFetchData } from "@/hooks/useFetchData";
import { TMDB_API_URL } from "@/utils/const";

export const TopRatedMovie = () => {
  const { data } = useFetchData(`${TMDB_API_URL}/movie/top_rated`);

  return (
    <div>
      <h2 className="text-white">評価の高い映画</h2>
      <EmblaCarousel items={data?.results} />
    </div>
  );
};
