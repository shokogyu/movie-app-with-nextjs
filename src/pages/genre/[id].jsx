import { GenrePage } from "@/components/Genre/GenrePage";
import { Layout } from "@/components/Layout";
import { TMDB_API_KEY, TMDB_API_URL } from "@/utils/const";

export const getStaticPaths = async () => {
  const res = await fetch(
    `${TMDB_API_URL}/genre/movie/list?api_key=${TMDB_API_KEY}&language=en-US`
  );
  const genreListData = await res.json();
  const paths = await genreListData.genres.map((genre) => {
    return {
      params: {
        id: genre.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (ctx) => {
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

const Genre = (props) => {
  return (
    <Layout genreListData={props.genreListData}>
      <GenrePage />
    </Layout>
  );
};

export default Genre;
