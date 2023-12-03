import { GridLayout } from "@/components/Layout/Grid";
import { LoadMoreButton } from "@/components/LoadMore/LoadMoreButton";
import { Modal } from "@/components/Modal";
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
    <div className="space-y-3 px-5 md:space-y-5 md:p-6">
      <h1 className="text-xl font-bold md:text-3xl">「 {router.query.keyword} 」の検索結果</h1>
      {data[0].results.length === 0 ? (
        <div className="text-xs md:text-base">
          検索ワードに該当するものが見つかりませんでした。
          <br />
          別のキーワードをお試しください。
        </div>
      ) : (
        <>
          <GridLayout data={data} handleClick={handleClick} isInfiniteScroll={true} />
          <LoadMoreButton isReachingEnd={isReachingEnd} setSize={setSize} />
          <Modal isOpen={isOpen} setIsOpen={setIsOpen} activeMovie={activeMovie} />
        </>
      )}
    </div>
  );
};
