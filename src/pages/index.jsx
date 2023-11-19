import { FirstViewMovie } from "@/components/FirstViewMovie";
import { Inter } from "next/font/google";
import { Row } from "@/components/Row";
import { MyListRow } from "@/components/MyList/MyListRow";
import { TMDB_API_KEY, TMDB_API_URL } from "@/utils/const";
import { Layout } from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

// ISR対応
export const getStaticProps = async () => {
  const urls = [
    `${TMDB_API_URL}/movie/popular?api_key=${TMDB_API_KEY}&language=ja-JA`,
    `${TMDB_API_URL}/movie/top_rated?api_key=${TMDB_API_KEY}&language=ja-JA`,
    `${TMDB_API_URL}/movie/upcoming?api_key=${TMDB_API_KEY}&language=ja-JA`,
    `${TMDB_API_URL}/genre/movie/list?api_key=${TMDB_API_KEY}&language=en-US`,
  ];

  const results = await Promise.allSettled(
    urls.map((url) => {
      return fetch(url).then((res) => res.json());
    })
  );

  const [popularData, topRatedData, upcomingData, genreListData] = results.map((result) => {
    return result.status === "fulfilled" ? result.value : null;
  });
  const topRatedNo1Data = topRatedData.results[0]; // 1位のデータのみ抽出

  return {
    props: {
      popularData,
      topRatedData,
      topRatedNo1Data,
      upcomingData,
      genreListData,
    },
    revalidate: 3600, // 1 hour
  };
};

const Home = (props) => {
  return (
    <Layout genreListData={props.genreListData}>
      <FirstViewMovie data={props.topRatedNo1Data} />
      <div className="space-y-8">
        <MyListRow />
        <Row title="人気の映画" data={props.popularData} />
        <Row title="評価の高い映画" data={props.topRatedData} />
        <Row title="近日公開予定の映画" data={props.upcomingData} />
      </div>
    </Layout>
  );
};

export default Home;
