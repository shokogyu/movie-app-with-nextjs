import { Layout } from "@/components/Layout";
import { MyListPage } from "@/components/MyList/MyListPage";
import { TMDB_API_KEY, TMDB_API_URL } from "@/utils/const";

export const getStaticProps = async () => {
  const res = await fetch(
    `${TMDB_API_URL}/genre/movie/list?api_key=${TMDB_API_KEY}&language=en-US`
  );
  const genreListData = await res.json();

  return {
    props: {
      genreListData,
    },
    revalidate: 3600, // 1 hour
  };
};

const MyList = (props) => {
  return (
    <Layout genreListData={props.genreListData}>
      <MyListPage />
    </Layout>
  );
};

export default MyList;
