import { GridLayout } from "@/components/Layout/Grid";
import { Modal } from "@/components/Modal";
import { MovieThumbnail } from "@/components/Movie/MovieThumbnail";
import { useModal } from "@/hooks/useModal";
import { useMyList } from "@/hooks/useMyList";

export const MyListPage = () => {
  const { value: myList } = useMyList();
  const { isOpen, setIsOpen, activeMovie, handleClick } = useModal();

  return (
    <div className="space-y-3 px-5 md:space-y-5 md:p-6">
      <h1 className="text-2xl font-bold md:text-3xl">Myリスト</h1>
      {!myList || myList.length === 0 ? (
        <div className="text-xs md:text-base">Myリストはありません</div>
      ) : (
        <>
          <GridLayout data={myList} handleClick={handleClick} isInfiniteScroll={false} />
          <Modal isOpen={isOpen} setIsOpen={setIsOpen} activeMovie={activeMovie} />
        </>
      )}
    </div>
  );
};
