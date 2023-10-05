import { EmblaCarousel } from "@/components/EmblaCarousel";
import { useFetchData } from "@/hooks/useFetchData";
import { TMDB_API_URL } from "@/utils/const";

export const NowPlayingMovie = () => {
  const { data } = useFetchData(`${TMDB_API_URL}/movie/now_playing`);

  return (
    <div>
      <h2 className="text-white">上映中の映画</h2>
      <EmblaCarousel items={data?.results} />
    </div>
  );
};
