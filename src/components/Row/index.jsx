import { EmblaCarousel } from "@/components/EmblaCarousel";

export const Row = (props) => {
  return (
    <div className="mb-8">
      <h2 className="pl-3 text-xl font-bold text-white">{props.title}</h2>
      <EmblaCarousel movies={props.data?.results} />
    </div>
  );
};
