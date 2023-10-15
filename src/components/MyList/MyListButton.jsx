import { useContext } from "react";
import { AiOutlineHeart } from "@react-icons/all-files/ai/AiOutlineHeart";
import { AiFillHeart } from "@react-icons/all-files/ai/AiFillHeart";
import { IconContext } from "@react-icons/all-files";
import { MyListContext } from "@/pages/_app";

export const MyListButton = (props) => {
  const { state, dispatch } = useContext(MyListContext);

  console.log(state.myList);

  return (
    <IconContext.Provider value={{ color: "#df006c", className: "text-xl" }}>
      {state.myList && state.myList.some((prevList) => prevList.id === props.movie.id) ? (
        <button
          onClick={() => dispatch({ type: "remove", data: props.movie })}
          className="mt-7 border rounded-lg px-3 py-2 flex items-center gap-2 text-xs"
        >
          <AiFillHeart />
          Myリスト保存済
        </button>
      ) : (
        <button
          onClick={() => dispatch({ type: "add", data: props.movie })}
          className="mt-7 border rounded-lg px-3 py-2 flex items-center gap-2 text-xs"
        >
          <AiOutlineHeart />
          Myリスト追加
        </button>
      )}
    </IconContext.Provider>
  );
};
