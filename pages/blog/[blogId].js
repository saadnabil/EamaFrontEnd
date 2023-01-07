import Head from "next/head";
import { SingleBlogComponent } from "../../components/singleBlog/singleBlog";

const SingleBlogPage = () => {
  return (
    <div>
      <Head>
        <title>emma website</title>
        <meta key="description" name="description" content="My new title" />
        <meta key="keywords" name="keywords" content="My, new, title" />
      </Head>
      <SingleBlogComponent />
    </div>
  );
};

export default SingleBlogPage;
