import { ModalComponent } from "@/components/ModalComponent";
import { TMDB_SM_IMG_URL } from "@/utils/const";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useState } from "react";

export const EmblaCarousel = (props) => {
  const OPTIONS = { loop: true, dragFree: true, align: "start" };
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
  const [isOpen, setIsOpen] = useState(false);
  const [activeMovie, setActiveMovie] = useState([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const handleClick = (movie) => {
    setActiveMovie(movie);
    setIsOpen(true);
  };

  if (!props.movies) {
    return "No Carousel Items...";
  }

  return (
    <div className="relative">
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {props.movies.map((movie) => {
            return (
              <div
                key={movie.id}
                className="embla__slide relative min-w-0 flex-shrink-0 flex-grow-0 basis-[13%] border border-4  border-transparent hover:border-red-800 transition-[border,opacity] duration-300 cursor-pointer rounded-lg group hover:opacity-80"
                onClick={() => handleClick(movie)}
              >
                <img
                  src={`${TMDB_SM_IMG_URL}${movie.poster_path}`}
                  className="rounded-sm group-hover:opacity-85 "
                />
              </div>
            );
          })}
        </div>
        <ModalComponent isOpen={isOpen} setIsOpen={setIsOpen} activeMovie={activeMovie} />;
      </div>
      <button
        className="embla__prev bg-gray-900 text-white rounded-full w-10 h-10 absolute top-2/4 left-6 translate-y-[-65%]"
        onClick={scrollPrev}
      >
        ◀
      </button>
      <button
        className="embla__next bg-gray-900 text-white rounded-full w-10 h-10 absolute top-2/4 right-6 translate-y-[-65%]"
        onClick={scrollNext}
      >
        ▶
      </button>
    </div>
  );
};
