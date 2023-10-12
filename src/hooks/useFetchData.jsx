import { TMDB_API_KEY } from "@/utils/const";
import useSWRImmutable from "swr/immutable";
// import useSWR from "swr";

const fetcher = async (...args) => {
  const response = await fetch(...args);
  if (!response.ok) {
    throw new Error("エラーが発生したため、データの取得に失敗しました");
  }
  const json = await response.json();
  return json;
};

export const useFetchData = (url) => {
  const api_key_param = url.match(/\?(.*)/)
    ? `&api_key=${TMDB_API_KEY}`
    : `?api_key=${TMDB_API_KEY}`;
  const API_URL = url + api_key_param;

  const { data, error, isLoading } = useSWRImmutable(API_URL, fetcher);

  return { data, error, isLoading };
};

// 映画のジャンル一覧を取得
export const useGenres = () => {
  return useFetchData("https://api.themoviedb.org/3/genre/movie/list");
};

// ジャンルIDからジャンル名を取得
export const useGenreNameByGenreId = (movieGenreIdArray) => {
  const { data, error, isLoading } = useGenres();

  const results = movieGenreIdArray?.map((movieGenreId) => {
    return data?.genres.find((val, key) => {
      return val.id === movieGenreId;
    });
  });

  return { results };
};

// 映画IDから出演しているキャストを取得
export const useCastByMovieId = (movieId) => {
  const { data, error, isLoading } = useFetchData(
    `https://api.themoviedb.org/3/movie/${movieId}/credits`
  );
  const cast = data?.cast;

  return {
    cast,
    error,
    isLoading,
  };
};