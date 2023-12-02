import { Modal } from "@/components/Modal";
import { MovieThumbnail } from "@/components/Movie/MovieThumbnail";
import { useModal } from "@/hooks/useModal";
import { useMyList } from "@/hooks/useMyList";

export const MyListPage = () => {
  const { value: myList } = useMyList();
  const { isOpen, setIsOpen, activeMovie, handleClick } = useModal();

  return (
    <div className="px-5 md:p-6">
      <h1 className="text-2xl font-bold md:text-3xl">Myリスト</h1>
      {!myList || myList.length === 0 ? (
        <div className="mt-10">Myリストはありません</div>
      ) : (
        <>
          <ul className="mt-1 grid grid-cols-2 gap-1 md:mt-5 md:grid-cols-5 md:gap-2">
            {myList.map((movie) => {
              return (
                <li key={movie.id} onClick={() => handleClick(movie)}>
                  <MovieThumbnail movie={movie} />
                </li>
              );
            })}
          </ul>
          <Modal isOpen={isOpen} setIsOpen={setIsOpen} activeMovie={activeMovie} />
        </>
      )}
    </div>
  );
};
