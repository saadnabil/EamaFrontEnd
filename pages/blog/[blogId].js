import Head from "next/head";
import { useSelector } from "react-redux";
import { SingleBlogComponent } from "../../components/singleBlog/singleBlog";
import { getSingleBlogThunk } from "../../store/slices/blog/blogSlice";
import { wrapper } from "../../store/store";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    await store.dispatch(getSingleBlogThunk(context.query.blogId));
  }
);

const SingleBlogPage = () => {
  const { singleBlog } = useSelector(({ blog }) => blog);

  return (
    <div>
      <Head>
        <title>{singleBlog.blog.meta_title}</title>
        <meta
          key="description"
          name="description"
          content={singleBlog.blog.meta_description}
        />
        <meta
          key="keywords"
          name="keywords"
          content={singleBlog.blog.meta_tag.map((tag) => `${tag}, `)}
        />
      </Head>
      <SingleBlogComponent />
    </div>
  );
};

export default SingleBlogPage;
