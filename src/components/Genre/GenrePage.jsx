import { LoadMoreButton } from "@/components/LoadMore/LoadMoreButton";
import { Modal } from "@/components/Modal";
import { MovieThumbnail } from "@/components/Movie/MovieThumbnail";
import { useInfiniteQuery } from "@/hooks/useInfiniteQuery";
import { useModal } from "@/hooks/useModal";
import { TMDB_API_URL } from "@/utils/const";
import { useRouter } from "next/router";

export const GenrePage = () => {
  const router = useRouter();
  const { isOpen, setIsOpen, activeMovie, handleClick } = useModal();

  const apiUrl = router.query.id
    ? `${TMDB_API_URL}/discover/movie?sort_by=popularity.desc&include_adult=false&with_genres=${router.query.id}`
    : null;

  const { data, error, isLoading, size, setSize, isReachingEnd } = useInfiniteQuery(apiUrl);

  if (!data || isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{router.query.name}</h1>
      <ul className="mt-5 grid grid-cols-5 gap-2">
        {data.map((data) => {
          return data.results.map((movie) => {
            return (
              <li key={movie.id} onClick={() => handleClick(movie)}>
                <MovieThumbnail movie={movie} />
              </li>
            );
          });
        })}
      </ul>
      <LoadMoreButton isReachingEnd={isReachingEnd} setSize={setSize} />
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} activeMovie={activeMovie} />
    </div>
  );
};
