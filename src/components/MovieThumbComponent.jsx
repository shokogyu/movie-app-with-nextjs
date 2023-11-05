import { TMDB_SM_IMG_URL } from "@/utils/const";

export const MovieThumbComponent = (props) => {
  return (
    <div className="group cursor-pointer rounded-lg border-4 border-transparent transition-[border,opacity] duration-300 hover:border-red-800 hover:opacity-80">
      <img
        src={`${TMDB_SM_IMG_URL}${props.movie.poster_path}`}
        className="group-hover:opacity-85 rounded-sm"
      />
    </div>
  );
};
