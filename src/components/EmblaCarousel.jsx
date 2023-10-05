import { ModalComponent } from "@/components/ModalComponent";
import { TMDB_SM_IMG_URL } from "@/utils/const";
import useEmblaCarousel from "embla-carousel-react";
import { useState } from "react";

export const EmblaCarousel = (props) => {
  const OPTIONS = { loop: true, dragFree: true, align: "start" };
  // const SLIDE_COUNT = 8;
  const [emblaRef] = useEmblaCarousel(OPTIONS);
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState([]);

  const handleClick = (item) => {
    setActiveItem(item);
    setIsOpen(true);
  };

  if (!props.items) {
    return "No Carousel Items...";
  }

  return (
    <div className="embla overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex">
        {props.items.map((item) => {
          return (
            <div
              key={item.id}
              className="embla__slide relative min-w-0 flex-shrink-0 flex-grow-0 basis-1/6 border border-4  border-transparent hover:border-red-800 transition-[border,opacity] duration-300 cursor-pointer rounded-lg group hover:opacity-80"
              onClick={() => handleClick(item)}
            >
              <img
                src={`${TMDB_SM_IMG_URL}${item.poster_path}`}
                className="rounded-sm group-hover:opacity-85 "
              />
              {/* <h3 className="text-white absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] opacity-0 group-hover:opacity-100">
                {item.title}
              </h3> */}
            </div>
          );
        })}
      </div>
      <ModalComponent isOpen={isOpen} setIsOpen={setIsOpen} activeItem={activeItem} />;
    </div>
  );
};
