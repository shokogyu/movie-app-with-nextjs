import { Cast } from "@/components/Cast";
import { MyListButton } from "@/components/MyList/MyListButton";
import { useGenreNameByGenreId } from "@/hooks/useFetchData";
import { TMDB_IMG_URL } from "@/utils/const";

export const Modal = (props) => {
  const { isOpen, setIsOpen, activeMovie } = props;
  const { results } = useGenreNameByGenreId(activeMovie.genre_ids);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  if (!isOpen) {
    return;
  }

  const thumbnailUrl = activeMovie.poster_path
    ? TMDB_IMG_URL + activeMovie.poster_path
    : "/noimage.png";

  return (
    <dialog className="fixed left-0 top-0 z-10 !mt-0 block h-screen w-full bg-black/50">
      <div className="relative top-1/2 m-auto w-11/12 -translate-y-2/4 overflow-y-auto rounded-lg bg-slate-900 md:top-2/4 md:w-3/4 md:overflow-hidden">
        <div className="h-[78vh] md:flex">
          <div className="shrink-0 grow-0 basis-2/5 overflow-hidden">
            <img src={thumbnailUrl} alt="" />
          </div>
          <div className="basis-3/5 overflow-y-auto px-4 py-6 text-white md:max-w-[60%] md:p-9 md:pt-16">
            <p className="text-2xl font-bold md:text-4xl">{activeMovie.title}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {results?.map((genre) => {
                return (
                  <span key={genre.id} className="rounded-md bg-zinc-600 px-2 py-1 text-xs">
                    {genre.name}
                  </span>
                );
              })}
            </div>
            <p className="mt-5 text-base font-light leading-loose">{activeMovie.overview}</p>
            <p className="mt-2 text-sm font-light text-zinc-600">
              Release Date : {activeMovie.release_date}
            </p>
            <div className="mt-10 w-full p-2">
              <Cast movie={activeMovie} />
              <MyListButton movie={activeMovie} movieId={activeMovie.id} />
            </div>
            <button onClick={toggleModal} className="absolute right-4 top-4">
              ✗
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};
