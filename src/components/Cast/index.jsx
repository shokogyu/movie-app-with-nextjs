import { MyListButton } from "@/components/MyList/MyListButton";
import { useCastByMovieId } from "@/hooks/useFetchData";
import { TMDB_IMG_URL } from "@/utils/const";

export const Cast = (props) => {
  const { cast, error, isLoading } = useCastByMovieId(props.movie.id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="mt-10 w-full p-2">
      <div>Cast</div>
      <ul className="mt-2 flex w-full gap-4 overflow-x-auto">
        {cast?.map((cast) => {
          return (
            cast.profile_path && (
              <li key={cast.id} className="w-16 min-w-[4rem]">
                <img
                  src={`${TMDB_IMG_URL}${cast.profile_path}`}
                  alt={cast.character}
                  className="h-16 w-full max-w-none rounded-full object-cover"
                />
                <span className="block w-full truncate text-xs opacity-60">{cast.character}</span>
              </li>
            )
          );
        })}
      </ul>
      <MyListButton movie={props.movie} movieId={props.movie.id} />
    </div>
  );
};
