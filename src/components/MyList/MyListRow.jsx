import { EmblaCarousel } from "@/components/EmblaCarousel";
import { useMyList } from "@/hooks/useMyList";

export const MyListRow = () => {
  const { value: myList } = useMyList();

  if (!myList || myList.length === 0) {
    return null;
  }

  return (
    <section>
      <h2 className="px-3 text-base font-bold text-white md:pl-3 md:pr-0 md:text-xl">Myリスト</h2>
      <EmblaCarousel movies={myList} />
    </section>
  );
};
