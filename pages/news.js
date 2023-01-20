import Head from "next/head";
import { NewsComponent } from "../components/news/news";

const NewsPage = () => {
  return (
    <div>
      <Head>
        <title>emma website</title>
        <meta key="description" name="description" content="My new title" />
        <meta key="keywords" name="keywords" content="My, new, title" />
      </Head>
      <NewsComponent />
    </div>
  );
};

export default NewsPage;
