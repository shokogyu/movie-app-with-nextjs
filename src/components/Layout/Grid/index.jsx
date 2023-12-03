import { MovieThumbnail } from "@/components/Movie/MovieThumbnail";

export const GridLayout = (props) => {
  return (
    <ul className="grid grid-cols-2 gap-1 md:grid-cols-5 md:gap-2">
      {props.isInfiniteScroll
        ? props.data.map((data) =>
            data.results.map((movie) => (
              <li key={movie.id} onClick={() => props.handleClick(movie)}>
                <MovieThumbnail movie={movie} />
              </li>
            ))
          )
        : props.data.map((movie) => (
            <li key={movie.id} onClick={() => props.handleClick(movie)}>
              <MovieThumbnail movie={movie} />
            </li>
          ))}
    </ul>
  );
};
