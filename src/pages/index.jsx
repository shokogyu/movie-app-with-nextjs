import { FirstViewMovie } from "@/components/FirstViewMovie";
import { Inter } from "next/font/google";
import { Row } from "@/components/Row";
import { MyList } from "@/components/MyList";
import { TMDB_API_KEY, TMDB_API_URL } from "@/utils/const";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

// ISR対応
export const getStaticProps = async () => {
  const res = await fetch(`${TMDB_API_URL}/movie/popular?api_key=${TMDB_API_KEY}&language=ja-JA`);
  const popularData = await res.json();

  const res2 = await fetch(
    `${TMDB_API_URL}/movie/top_rated?api_key=${TMDB_API_KEY}&language=ja-JA`
  );
  const topRatedData = await res2.json();

  const res3 = await fetch(`${TMDB_API_URL}/movie/upcoming?api_key=${TMDB_API_KEY}&language=ja-JA`);
  const upcomingData = await res3.json();

  return {
    props: {
      popularData,
      topRatedData,
      upcomingData,
    },
    revalidate: 3600, // 1 hour
  };
};

export default function Home(props) {
  return (
    <Layout>
      <FirstViewMovie />
      <MyList />
      <Row title="人気の映画" data={props.popularData} />
      <Row title="評価の高い映画" data={props.topRatedData} />
      <Row title="近日公開予定の映画" data={props.upcomingData} />
    </Layout>
  );
}
