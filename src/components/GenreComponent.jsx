import { ModalComponent } from "@/components/ModalComponent";
import { MovieThumbComponent } from "@/components/MovieThumbComponent";
import { useModal } from "@/hooks/useModal";
import { useMoviesByGenreId } from "@/hooks/useMoviesByGenreId";
import { useRouter } from "next/router";

export const GenreComponent = () => {
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
      <ul className="grid grid-cols-5 mt-5 gap-2">
        {data?.results.map((movie) => {
          return (
            <li key={movie.id} onClick={() => handleClick(movie)}>
              <MovieThumbComponent movie={movie} />
            </li>
          );
        })}
      </ul>
      <ModalComponent isOpen={isOpen} setIsOpen={setIsOpen} activeMovie={activeMovie} />
    </div>
  );
};
