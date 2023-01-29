import Head from "next/head";
import { SingleBlogComponent } from "../../components/singleBlog/singleBlog";
import { getSingleBlogThunk } from "../../store/slices/blog/blogSlice";
import { wrapper } from "../../store/store";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    await store.dispatch(getSingleBlogThunk(context.query.blogId));
  }
);

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
