import { Modal } from "@/components/Modal";
import { MovieThumbnail } from "@/components/Movie/MovieThumbnail";
import { useModal } from "@/hooks/useModal";
import { useMoviesByGenreId } from "@/hooks/useMoviesByGenreId";
import { useRouter } from "next/router";

export const GenrePage = (props) => {
  const router = useRouter();
  const { data, error, isLoading } = useMoviesByGenreId();
  const { isOpen, setIsOpen, activeMovie, handleClick } = useModal();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{router.query.name}</h1>
      <ul className="mt-5 grid grid-cols-5 gap-2">
        {data?.results.map((movie) => {
          return (
            <li key={movie.id} onClick={() => handleClick(movie)}>
              <MovieThumbnail movie={movie} />
            </li>
          );
        })}
      </ul>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} activeMovie={activeMovie} />
    </div>
  );
};
