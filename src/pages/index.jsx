import { FirstViewMovie } from "@/components/FirstViewMovie";
import { Inter } from "next/font/google";
import { Row } from "@/components/Row";
import { MyList } from "@/components/MyList";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <FirstViewMovie />
      <MyList />
      <Row title="人気の映画" movieType="popular" />
      <Row title="評価の高い映画" movieType="top_rated" />
      <Row title="上映予定の映画" movieType="upcoming" />
    </main>
  );
}
