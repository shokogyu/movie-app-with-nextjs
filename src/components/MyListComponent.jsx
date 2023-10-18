import { ModalComponent } from "@/components/ModalComponent";
import MovieThumbComponent from "@/components/MovieThumbComponent";
import { useModal } from "@/hooks/useModal";
import { useMyList } from "@/hooks/useMyList";
import { useEffect } from "react";

const MyListComponent = () => {
  const { state, dispatch } = useMyList();
  const { isOpen, setIsOpen, activeMovie, handleClick } = useModal();

  useEffect(() => {
    dispatch({ type: "load" });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Myリスト</h1>
      {state.myList.length === 0 ? (
        <div className="mt-10">Myリストはありません</div>
      ) : (
        <>
          <ul className="grid grid-cols-5 mt-5 gap-2">
            {state.myList.map((movie) => {
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

export default MyListComponent;