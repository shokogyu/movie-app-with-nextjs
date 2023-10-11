import { EmblaCarousel } from "@/components/EmblaCarousel";
import { useMyList } from "@/hooks/useMyList";

export const MyList = () => {
  const { myList } = useMyList();

  return (
    <div>
      <h2 className="text-white text-xl font-bold pl-3">Myリスト</h2>
      <EmblaCarousel movies={myList} />
    </div>
  );
};
