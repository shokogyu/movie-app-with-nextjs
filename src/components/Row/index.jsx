import { EmblaCarousel } from "@/components/EmblaCarousel";

export const Row = (props) => {
  return (
    <section>
      <h2 className="px-3 text-base font-bold text-white md:pl-3 md:pr-0 md:text-xl">
        {props.title}
      </h2>
      <EmblaCarousel movies={props.data?.results} />
    </section>
  );
};
