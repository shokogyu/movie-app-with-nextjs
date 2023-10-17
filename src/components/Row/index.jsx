import { EmblaCarousel } from "@/components/EmblaCarousel";

export const Row = (props) => {
  return (
    <div className="mb-8">
      <h2 className="text-white text-xl font-bold pl-3">{props.title}</h2>
      <EmblaCarousel movies={props.data?.results} />
    </div>
  );
};
