import { Modal } from "@/components/Modal";
import { MovieThumbnail } from "@/components/Movie/MovieThumbnail";
import { useFetchData } from "@/hooks/useFetchData";
import { useModal } from "@/hooks/useModal";
import { TMDB_API_URL } from "@/utils/const";
import { useRouter } from "next/router";

export const SearchResult = () => {
  const router = useRouter();
  const { isOpen, setIsOpen, activeMovie, handleClick } = useModal();

  const { data, error, isLoading } = useFetchData(
    `${TMDB_API_URL}/search/movie?query=${router.query.keyword}&include_adult=false`
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">「 {router.query.keyword} 」の検索結果</h1>
      {data?.results.length === 0 ? (
        <div className="mt-10">
          検索ワードに該当するものが見つかりませんでした。
          <br />
          別のキーワードをお試しください。
        </div>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};
