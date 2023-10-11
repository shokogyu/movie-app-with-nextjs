import Image from "next/image";
import { useState } from "react";
import { AiOutlineHeart } from "@react-icons/all-files/ai/AiOutlineHeart";
import { AiFillHeart } from "@react-icons/all-files/ai/AiFillHeart";
import { useMyList } from "@/hooks/useMyList";
import { IconContext } from "@react-icons/all-files";

export const MyListButton = (props) => {
  const { myList, handleToggle, isMyList } = useMyList();

  return (
    <button onClick={() => handleToggle(props.movie)} className="mt-7 border rounded-lg px-3 py-2">
      <div className="flex items-center gap-2 text-xs">
        <IconContext.Provider value={{ color: "#df006c", className: "text-xl" }}>
          {isMyList ? (
            <>
              <AiFillHeart />
              Myリストから削除
            </>
          ) : (
            <>
              <AiOutlineHeart />
              Myリストに追加
            </>
          )}
        </IconContext.Provider>
      </div>
    </button>
  );
};
