import { AiOutlineHeart } from "@react-icons/all-files/ai/AiOutlineHeart";
import { AiFillHeart } from "@react-icons/all-files/ai/AiFillHeart";
import { IconContext } from "@react-icons/all-files";
import { useMyList } from "@/hooks/useMyList";

export const MyListButton = (props) => {
  const { value: myList, set: setMyList } = useMyList();

  const handleAdd = (movie) => {
    setMyList((prevMyList) => [...prevMyList, movie]);
  };

  const handleRemove = (movie) => {
    setMyList((prevMyList) => {
      return prevMyList.filter((myListMovie) => {
        return myListMovie.id !== movie.id;
      });
    });
  };

  const isAlreadyAdded = myList && myList.some((prevMyList) => prevMyList.id === props.movie.id);

  return (
    <IconContext.Provider value={{ color: "#df006c", className: "text-lg md:text-xl" }}>
      {isAlreadyAdded ? (
        <button
          onClick={() => handleRemove(props.movie)}
          className="mt-7 flex items-center gap-2 rounded-lg border px-2 py-1 text-[10px] md:px-3 md:py-2 md:text-xs"
        >
          <AiFillHeart />
          Myリスト保存済
        </button>
      ) : (
        <button
          onClick={() => handleAdd(props.movie)}
          className="mt-7 flex items-center gap-2 rounded-lg border px-2 py-1 text-[10px] md:px-3 md:py-2 md:text-xs"
        >
          <AiOutlineHeart />
          Myリスト追加
        </button>
      )}
    </IconContext.Provider>
  );
};
