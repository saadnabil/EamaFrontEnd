import Head from "next/head";
import { BlogComponent } from "../../components/blog/blog";

const BlogPage = () => {
  return (
    <div>
      <Head>
        <title>emma website</title>
        <meta key="description" name="description" content="My new title" />
        <meta key="keywords" name="keywords" content="My, new, title" />
      </Head>
      <BlogComponent />
    </div>
  );
};

export default BlogPage;
