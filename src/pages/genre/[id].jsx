import Layout from "@/components/Layout";
import { ModalComponent } from "@/components/ModalComponent";
import MovieThumbComponent from "@/components/MovieThumbComponent";
import { useMoviesByGenreId } from "@/hooks/Discover/useMoviesByGenreId";
import { useModal } from "@/hooks/useModal";
import { TMDB_SM_IMG_URL } from "@/utils/const";
import { useRouter } from "next/router";
import React from "react";

function Genre() {
  const { data, error, isLoading } = useMoviesByGenreId();
  const { isOpen, setIsOpen, activeMovie, handleClick } = useModal();

  const router = useRouter();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Layout>
      <div className="py-6">
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
    </Layout>
  );
}

export default Genre;
