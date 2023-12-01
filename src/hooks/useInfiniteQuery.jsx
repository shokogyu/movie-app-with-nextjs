import { TMDB_API_KEY } from "@/utils/const";
import { fetcher } from "@/utils/fetcher";
import useSWRInfinite from "swr/infinite";

export const useInfiniteQuery = (apiUrl) => {
  const getKey = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.results.length) return null; // 最後に到達した
    return `${apiUrl}&api_key=${TMDB_API_KEY}&page=${pageIndex + 1}`; // SWR キー
  };

  const { data, error, isLoading, size, setSize } = useSWRInfinite(getKey, fetcher);

  const limit = 20; // 1ページあたり表示数
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd = isEmpty || (data && data[data.length - 1]?.results.length < limit);

  return {
    data,
    error,
    isLoading,
    size,
    setSize,
    isEmpty,
    isReachingEnd,
  };
};
