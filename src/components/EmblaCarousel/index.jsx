import { Modal } from "@/components/Modal";
import { MovieThumbnail } from "@/components/Movie/MovieThumbnail";
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
    <div className="relative mt-3 min-h-[260px]">
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {props.movies.map((movie) => {
            return (
              <div
                key={movie.id}
                className="embla__slide relative min-w-0 shrink-0 grow-0 basis-1/6"
                onClick={() => handleClick(movie)}
              >
                <MovieThumbnail movie={movie} />
              </div>
            );
          })}
        </div>
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} activeMovie={activeMovie} />
      </div>
      <button
        className="embla__prev absolute left-6 top-2/4 h-10 w-10 -translate-y-2/3 rounded-full bg-gray-900 text-white"
        onClick={scrollPrev}
      >
        ◀
      </button>
      <button
        className="embla__next absolute right-6 top-2/4 h-10 w-10 -translate-y-2/3 rounded-full bg-gray-900 text-white"
        onClick={scrollNext}
      >
        ▶
      </button>
    </div>
  );
};
