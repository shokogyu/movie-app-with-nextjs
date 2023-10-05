// import Image from "next/image";
import { EmblaCarousel } from "@/components/EmblaCarousel";
import { NowPlayingMovie } from "@/components/NowPlayingMovie";
import { PopularMovie } from "@/components/PopularMovie";
import { FirstViewMovie } from "@/components/FirstViewMovie";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  // console.log(data);
  // console.log(data['data']['page']);

  return (
    <main className="">
      <FirstViewMovie />
      <PopularMovie />
      <NowPlayingMovie />
    </main>
  );
}
