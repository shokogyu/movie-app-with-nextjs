import { fetcher } from "@/utils/fetcher";
import useSWRInfinite from "swr/infinite";

export const useInfiniteQuery = (apiUrl) => {
    
  const getKey = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.results.length) return null; // 最後に到達した
    return `${apiUrl}&page=${pageIndex + 1}`; // SWR キー
  };

  const { data, error, isLoading, size, setSize } = useSWRInfinite(getKey, fetcher);

  return {
    data,
    error,
    isLoading,
    size,
    setSize,
  };
};
