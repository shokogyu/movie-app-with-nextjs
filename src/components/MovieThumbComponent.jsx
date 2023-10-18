import { TMDB_SM_IMG_URL } from "@/utils/const";

export const MovieThumbComponent = (props) => {
  return (
    <div className="border border-4 border-transparent hover:border-red-800 transition-[border,opacity] duration-300 cursor-pointer rounded-lg group hover:opacity-80">
      <img
        src={`${TMDB_SM_IMG_URL}${props.movie.poster_path}`}
        className="rounded-sm group-hover:opacity-85 "
      />
    </div>
  );
};
