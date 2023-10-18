import "@/styles/globals.css";
import { useMyList } from "@/hooks/useMyList";
import { createContext, useEffect } from "react";

export const MyListContext = createContext();

const App = ({ Component, pageProps }) => {
  const { state, dispatch } = useMyList();

  useEffect(() => {
    dispatch({ type: "load" });
  }, []);

  return (
    <MyListContext.Provider value={{ state, dispatch }}>
      <Component {...pageProps} />
    </MyListContext.Provider>)
}

export default App