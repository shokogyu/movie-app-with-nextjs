import { ModalComponent } from "@/components/ModalComponent";
import { MovieThumbComponent } from "@/components/MovieThumbComponent";
import { useModal } from "@/hooks/useModal";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

const OPTIONS = { loop: true, dragFree: true, align: "start" };

export const EmblaCarousel = (props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
  const { isOpen, setIsOpen, activeMovie, handleClick } = useModal();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  if (!props.movies) {
    return <div className="text-white">映画情報がありません</div>;
  }

  return (
    <div className="relative min-h-[260px] mt-3">
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {props.movies.map((movie) => {
            return (
              <div
                key={movie.id}
                className="embla__slide relative min-w-0 flex-shrink-0 flex-grow-0 basis-1/5"
                onClick={() => handleClick(movie)}
              >
                <MovieThumbComponent movie={movie} />
              </div>
            );
          })}
        </div>
        <ModalComponent isOpen={isOpen} setIsOpen={setIsOpen} activeMovie={activeMovie} />
      </div>
      <button
        className="embla__prev bg-gray-900 text-white rounded-full w-10 h-10 absolute top-2/4 left-6 -translate-y-2/3"
        onClick={scrollPrev}
      >
        ◀
      </button>
      <button
        className="embla__next bg-gray-900 text-white rounded-full w-10 h-10 absolute top-2/4 right-6 -translate-y-2/3"
        onClick={scrollNext}
      >
        ▶
      </button>
    </div>
  );
};
