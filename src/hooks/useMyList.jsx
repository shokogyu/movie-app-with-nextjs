import { useLocalStorageValue } from "@react-hookz/web";

export const useMyList = () => {
  const { value, set } = useLocalStorageValue("myList", {
    defaultValue: [],
    initializeWithValue: false,
  });

  return { value, set };
};
