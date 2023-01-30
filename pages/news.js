import Head from "next/head";
import { useSelector } from "react-redux";
import { NewsComponent } from "../components/news/news";
import { getNewsPage } from "../store/slices/news/news";
import { wrapper } from "../store/store";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    await store.dispatch(getNewsPage());
  }
);

const NewsPage = () => {
  const { news } = useSelector(({ news }) => news);

  return (
    <div>
      <Head>
        <title>{news.seo_section.meta_title}</title>
        <meta
          key="description"
          name="description"
          content={news.seo_section.meta_description}
        />
        <meta
          key="keywords"
          name="keywords"
          content={news.seo_section.meta_tag.map((tag) => `${tag}, `)}
        />
      </Head>
      <NewsComponent />
    </div>
  );
};

export default NewsPage;
