import { ModalComponent } from "@/components/ModalComponent";
import MovieThumbComponent from "@/components/MovieThumbComponent";
import { useFetchData } from "@/hooks/useFetchData";
import { useModal } from "@/hooks/useModal";
import { TMDB_API_URL } from "@/utils/const";
import { useRouter } from "next/router";

const SearchResultComponent = () => {
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
    <div className="py-6">
      <h1 className="text-3xl font-bold">「 {router.query.keyword} 」の検索結果</h1>
      {data?.results.length === 0 ? (
        <div className="mt-10">
          検索ワードに該当するものが見つかりませんでした。
          <br />
          別のキーワードをお試しください。
        </div>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default SearchResultComponent;
