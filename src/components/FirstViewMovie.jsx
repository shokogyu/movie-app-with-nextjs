import { EmblaCarousel } from "@/components/EmblaCarousel";
import { useFetchData, useGenreNameByGenreId } from "@/hooks/useFetchData";
import { TMDB_API_URL, TMDB_IMG_URL } from "@/utils/const";

export const FirstViewMovie = () => {
  const { data, error, isLoading } = useFetchData(`${TMDB_API_URL}/movie/top_rated`);
  const firstData = data?.results.slice(0, 1)[0];


  if (isLoading) {
    return "Loading...";
  }

  // console.log(firstData);
  // if()

  // const (data.results.slice(0, 10))
  // showMovies(data.results.slice(0, 10))
  const backgroundImage = TMDB_IMG_URL + firstData.backdrop_path;

  return (
    <div className="h-[60vh] max-h-[500px] relative p-10 overflow-hidden">
      <img src={backgroundImage} alt="" className="absolute top-0 left-0" />
      <div className="absolute top-2/4 w-2/5 translate-y-[-50%]">
        <h2 className="text-white text-6xl font-black drop-shadow-xl">{firstData.title}</h2>
        <p className="text-white text-base mt-4  drop-shadow-xl">{firstData.overview}</p>
      </div>
      <div className="bg-gradient-to-b from-transparent to-black h-20 w-[100vw] absolute left-0 bottom-0"></div>
    </div>
  );
};
