import { UpcomingMovie } from "@/components/UpcomingMovie";
import { PopularMovie } from "@/components/PopularMovie";
import { FirstViewMovie } from "@/components/FirstViewMovie";
import { Inter } from "next/font/google";
import { TopRatedMovie } from "@/components/TopRatedMovie";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // console.log(data);
  // console.log(data['data']['page']);

  return (
    <main className="">
      <FirstViewMovie />
      <PopularMovie />
      <TopRatedMovie />
      <UpcomingMovie />
    </main>
  );
}
