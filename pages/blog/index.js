import Head from "next/head";
import { BlogComponent } from "../../components/blog/blog";
import { getBlogPage } from "../../store/slices/blog/blogSlice";
import { wrapper } from "../../store/store";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    await store.dispatch(getBlogPage());
  }
);

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
