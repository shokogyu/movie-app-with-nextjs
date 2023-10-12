import { FirstViewMovie } from "@/components/FirstViewMovie";
import { Inter } from "next/font/google";
import { Row } from "@/components/Row";
import { MyList } from "@/components/MyList";
import { TMDB_API_URL } from "@/utils/const";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <FirstViewMovie />
      <MyList />
      <Row title="人気の映画" url={`${TMDB_API_URL}/movie/popular`} />
      <Row title="評価の高い映画" url={`${TMDB_API_URL}/movie/top_rated`} />
      <Row title="上映予定の映画" url={`${TMDB_API_URL}/movie/upcoming`} />
    </Layout>
  );
}
