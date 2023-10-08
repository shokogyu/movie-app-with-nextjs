import { useCastByMovieId, useGenreNameByGenreId } from "@/hooks/useFetchData";
import { TMDB_IMG_URL } from "@/utils/const";

export const ModalComponent = (props) => {
  const { isOpen, setIsOpen, activeMovie } = props;

  const { results } = useGenreNameByGenreId(activeMovie.genre_ids);
  const { cast, error, isLoading } = useCastByMovieId(activeMovie.id);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  if (!isOpen) {
    return;
  }

  return (
    <dialog className="block z-[1] bg-black/50 w-full h-screen fixed top-0 left-0">
      <div className="bg-slate-900 w-3/4 m-auto relative top-2/4 translate-y-[-50%] rounded-lg overflow-hidden">
        <div className="flex">
          <div className="flex-shrink-0 flex-grow-0 basis-2/5 overflow-hidden">
            <img src={`${TMDB_IMG_URL}${activeMovie.poster_path}`} alt="" />
          </div>
          <div className="text-white p-9 basis-3/5 max-w-[60%]">
            <p className="text-4xl font-bold">{activeMovie.title}</p>
            <div className="flex gap-2">
              {results?.map((genre) => {
                return (
                  <span key={genre.id} className="bg-zinc-600 rounded-md px-2 py-1 text-xs mt-3">
                    {genre.name}
                  </span>
                );
              })}
            </div>
            <p className="text-base font-light mt-5">{activeMovie.overview}</p>
            <p className="text-sm font-light mt-2 text-zinc-600">
              Release Date : {activeMovie.release_date}
            </p>
            <div className="w-full mt-10">
              <div>Cast</div>
              <ul className="w-full overflow-x-auto flex gap-4 mt-2">
                {cast?.map((cast) => {
                  return (
                    cast.profile_path && (
                      <li key={cast.id} className="w-[70px] min-w-[70px]">
                        <img
                          src={`${TMDB_IMG_URL}${cast.profile_path}`}
                          alt={cast.character}
                          className="w-full h-[70px] object-cover rounded-[50%] max-w-none"
                        />
                        <span className="block text-xs w-full truncate opacity-60">
                          {cast.character}
                        </span>
                      </li>
                    )
                  );
                })}
              </ul>
            </div>
            <button onClick={toggleModal} className="absolute top-0 right-0">
              Close
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};
