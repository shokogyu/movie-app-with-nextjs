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
    <div className="w-full mt-10">
      <div>Cast</div>
      <ul className="w-full overflow-x-auto flex gap-4 mt-2">
        {cast?.map((cast) => {
          return (
            cast.profile_path && (
              <li key={cast.id} className="w-16 min-w-[4rem]">
                <img
                  src={`${TMDB_IMG_URL}${cast.profile_path}`}
                  alt={cast.character}
                  className="w-full h-16 object-cover rounded-full max-w-none"
                />
                <span className="block text-xs w-full truncate opacity-60">{cast.character}</span>
              </li>
            )
          );
        })}
      </ul>
      <MyListButton movie={props.movie} movieId={props.movie.id} />
    </div>
  );
};
