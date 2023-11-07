import { EmblaCarousel } from "@/components/EmblaCarousel";
import { useMyList } from "@/hooks/useMyList";

export const MyListRow = () => {
  const { value: myList } = useMyList();

  if (!myList || myList.length === 0) {
    return null;
  }

  return (
    <section>
      <h2 className="pl-3 text-xl font-bold text-white">Myリスト</h2>
      <EmblaCarousel movies={myList} />
    </section>
  );
};
