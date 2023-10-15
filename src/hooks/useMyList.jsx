import { useReducer, useState } from "react";

export const useMyList = () => {
  const initialState = {
    myList: [],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        console.log("add");
        return {
          myList: [].concat(state.myList, action.data),
        };
      case "remove":
        console.log("remove");
        return {
          // ...state,
          // myList: { ...state, ...action.data, ...action.data },
        };
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state.myList);
  // const [myList, setMyList] = useState([]);
  // const [isMyList, setIsMyList] = useState(false);

  // const handleToggle = (movie) => {
  //   console.log(myList);
  //   console.log(movie);

  //   // クリックされた映画がすでにMyListに登録されている場合
  //   if (myList.some((myList) => myList.id === movie.id)) {
  //     // MyListから除去する
  //     setMyList((myList) => {
  //       const newMyList = myList.filter((myList) => myList.id !== movie.id);
  //       return newMyList;
  //     });
  //     setIsMyList(false);
  //   } else {
  //     setMyList((prevList) => {
  //       return [...prevList, movie];
  //     });
  //     setIsMyList(true);
  //   }
  // };

  return { state, dispatch };
};
