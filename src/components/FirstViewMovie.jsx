import { MyListButton } from "@/components/MyList/MyListButton";
import { TMDB_IMG_URL } from "@/utils/const";

export const FirstViewMovie = (props) => {
  // 背景に使う画像の絶対パスを生成
  const backgroundImage = TMDB_IMG_URL + props.data.backdrop_path;

  return (
    <div className="relative mb-7 h-[60vh] max-h-[500px] overflow-hidden p-10">
      <img src={backgroundImage} alt="" className="absolute left-0 top-0" />
      <div className="absolute top-2/4 w-2/5 -translate-y-2/4">
        <h2 className="text-6xl font-black text-white drop-shadow-xl">{props.data.title}</h2>
        <p className="mt-4 text-base text-white  drop-shadow-xl">{props.data.overview}</p>
        <MyListButton movie={props.data} />
      </div>
      <div className="absolute bottom-0 left-0 h-20 w-screen bg-gradient-to-b from-transparent to-black"></div>
    </div>
  );
};
