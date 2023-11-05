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
    <dialog className="fixed left-0 top-0 z-10 block h-screen w-full bg-black/50">
      <div className="relative top-2/4 m-auto w-3/4 -translate-y-2/4 overflow-hidden rounded-lg bg-slate-900">
        <div className="flex max-h-[80vh]">
          <div className="shrink-0 grow-0 basis-2/5 overflow-hidden">
            <img src={`${TMDB_IMG_URL}${activeMovie.poster_path}`} alt="" />
          </div>
          <div className="max-w-[60%] basis-3/5 overflow-y-auto p-9 pt-16 text-white">
            <p className="text-4xl font-bold">{activeMovie.title}</p>
            <div className="flex gap-2">
              {results?.map((genre) => {
                return (
                  <span key={genre.id} className="mt-3 rounded-md bg-zinc-600 px-2 py-1 text-xs">
                    {genre.name}
                  </span>
                );
              })}
            </div>
            <p className="mt-5 text-base font-light leading-loose">{activeMovie.overview}</p>
            <p className="mt-2 text-sm font-light text-zinc-600">
              Release Date : {activeMovie.release_date}
            </p>
            <Cast movie={activeMovie} />
            <button onClick={toggleModal} className="absolute right-4 top-4">
              ✗
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};
