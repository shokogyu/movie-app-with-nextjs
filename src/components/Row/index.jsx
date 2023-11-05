import { EmblaCarousel } from "@/components/EmblaCarousel";

export const Row = (props) => {
  return (
    <section>
      <h2 className="pl-3 text-xl font-bold text-white">{props.title}</h2>
      <EmblaCarousel movies={props.data?.results} />
    </section>
  );
};
