import { EmblaCarousel } from "@/components/EmblaCarousel";
import { useFetchData } from "@/hooks/useFetchData";
import { TMDB_API_URL } from "@/utils/const";

export const Row = (props) => {
  const { data } = useFetchData(props.url ? props.url : null);

  return (
    <div>
      <h2 className="text-white text-xl font-bold pl-3">{props.title}</h2>
      <EmblaCarousel movies={data?.results} />
    </div>
  );
};