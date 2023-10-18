import { Cast } from "@/components/Cast";
import { useGenreNameByGenreId } from "@/hooks/useFetchData";
import { TMDB_IMG_URL } from "@/utils/const";

export const ModalComponent = (props) => {
  const { isOpen, setIsOpen, activeMovie } = props;
  const { results } = useGenreNameByGenreId(activeMovie.genre_ids);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  if (!isOpen) {
    return;
  }

  return (
    <dialog className="block z-10 bg-black/50 w-full h-screen fixed top-0 left-0">
      <div className="bg-slate-900 w-3/4 m-auto relative top-2/4 -translate-y-2/4 rounded-lg overflow-hidden">
        <div className="flex max-h-[80vh]">
          <div className="flex-shrink-0 flex-grow-0 basis-2/5 overflow-hidden">
            <img src={`${TMDB_IMG_URL}${activeMovie.poster_path}`} alt="" />
          </div>
          <div className="text-white pt-16 p-9 basis-3/5 max-w-[60%] overflow-y-auto">
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
            <p className="text-base font-light mt-5 leading-loose">{activeMovie.overview}</p>
            <p className="text-sm font-light mt-2 text-zinc-600">
              Release Date : {activeMovie.release_date}
            </p>
            <Cast movie={activeMovie} />
            <button onClick={toggleModal} className="absolute top-4 right-4">
              ✗
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};
