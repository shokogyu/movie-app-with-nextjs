import { useReducer } from "react";

export const useMyList = () => {
  const initialState = {
    myList: [],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "initial":
        return {
          ...state,
          myList: JSON.parse(localStorage.getItem("myList")) || [],
        };

      case "add":
        const newList = [].concat(state.myList, action.data);
        localStorage.setItem("myList", JSON.stringify(newList)); //TODO myListに変更あったタイミングで変わるようにHooks使いたい？

        return {
          ...state,
          myList: newList,
        };

      case "remove":
        const filteredList = state.myList.filter((movie) => {
          return movie.id !== action.data.id;
        });

        localStorage.setItem("myList", JSON.stringify(filteredList));
        return {
          ...state,
          myList: filteredList,
        };

      default:
        throw new Error("No such an action type");
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // const updateMyList = useCallback(() => {
  //   localStorage.setItem("myList", JSON.stringify(state.myList));
  // }, [state.myList]);

  return { state, dispatch };
};
