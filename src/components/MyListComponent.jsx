import { ModalComponent } from "@/components/ModalComponent";
import { MovieThumbComponent } from "@/components/MovieThumbComponent";
import { useModal } from "@/hooks/useModal";
import { useMyList } from "@/hooks/useMyList";

export const MyListComponent = () => {
  const { value: myList } = useMyList();
  const { isOpen, setIsOpen, activeMovie, handleClick } = useModal();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Myリスト</h1>
      {!myList || myList.length === 0 ? (
        <div className="mt-10">Myリストはありません</div>
      ) : (
        <>
          <ul className="mt-5 grid grid-cols-5 gap-2">
            {myList.map((movie) => {
              return (
                <li key={movie.id} onClick={() => handleClick(movie)}>
                  <MovieThumbComponent movie={movie} />
                </li>
              );
            })}
          </ul>
          <ModalComponent isOpen={isOpen} setIsOpen={setIsOpen} activeMovie={activeMovie} />
        </>
      )}
    </div>
  );
};
