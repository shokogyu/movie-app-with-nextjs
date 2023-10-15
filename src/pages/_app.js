import { useMyList } from "@/hooks/useMyList";
import "@/styles/globals.css";
import { createContext, useEffect } from "react";

export const MyListContext = createContext();

export default function App({ Component, pageProps }) {
  const { state, dispatch } = useMyList();

  useEffect(() => {
    dispatch({ type: "initial" });
  }, []);

  return (
    <MyListContext.Provider value={{ state, dispatch }}>
      <Component {...pageProps} />
    </MyListContext.Provider>)
}
