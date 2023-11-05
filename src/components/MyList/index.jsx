import { EmblaCarousel } from "@/components/EmblaCarousel";
import { MyListContext } from "@/pages/_app";
import { useContext } from "react";

export const MyList = () => {
  const { state, dispatch } = useContext(MyListContext);

  if (state.myList.length === 0) {
    return null;
  }

  return (
    <div className="mb-8">
      <h2 className="pl-3 text-xl font-bold text-white">Myリスト</h2>
      <EmblaCarousel movies={state.myList} />
    </div>
  );
};
