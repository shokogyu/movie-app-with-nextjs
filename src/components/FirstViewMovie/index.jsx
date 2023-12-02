import { MyListButton } from "@/components/MyList/MyListButton";
import { TMDB_IMG_URL } from "@/utils/const";

export const FirstViewMovie = (props) => {
  // 背景に使う画像の絶対パスを生成
  const backgroundImage = TMDB_IMG_URL + props.data.backdrop_path;

  return (
    <div className="relative mb-7 h-[30vh] overflow-hidden p-5 md:h-[60vh] md:max-h-[500px] md:p-10">
      <img src={backgroundImage} alt="" className="absolute left-0 top-0" />
      <div className="absolute top-2/4 w-2/3 -translate-y-2/4 md:w-2/5">
        <h2 className="text-3xl font-black text-white drop-shadow-xl md:text-6xl">
          {props.data.title}
        </h2>
        <p className="mt-4 hidden text-white drop-shadow-xl md:block md:text-base">
          {props.data.overview}
        </p>
        <MyListButton movie={props.data} />
      </div>
      <div className="absolute bottom-0 left-0 h-20 w-screen bg-gradient-to-b from-transparent to-black"></div>
    </div>
  );
};
