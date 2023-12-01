import { LoadMoreButton } from "@/components/LoadMore/LoadMoreButton";
import { Modal } from "@/components/Modal";
import { MovieThumbnail } from "@/components/Movie/MovieThumbnail";
import { useFetchData } from "@/hooks/useFetchData";
import { useInfiniteQuery } from "@/hooks/useInfiniteQuery";
import { useModal } from "@/hooks/useModal";
import { TMDB_API_URL } from "@/utils/const";
import { useRouter } from "next/router";

export const SearchResult = () => {
  const router = useRouter();
  const { isOpen, setIsOpen, activeMovie, handleClick } = useModal();
  const apiUrl = `${TMDB_API_URL}/search/movie?query=${router.query.keyword}&include_adult=false`;
  const { data, error, isLoading, size, setSize, isReachingEnd } = useInfiniteQuery(apiUrl);

  if (!data || isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">「 {router.query.keyword} 」の検索結果</h1>
      {data[0].results.length === 0 ? (
        <div className="mt-10">
          検索ワードに該当するものが見つかりませんでした。
          <br />
          別のキーワードをお試しください。
        </div>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};
