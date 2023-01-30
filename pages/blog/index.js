import Head from "next/head";
import { useSelector } from "react-redux";
import { BlogComponent } from "../../components/blog/blog";
import { getBlogPage } from "../../store/slices/blog/blogSlice";
import { wrapper } from "../../store/store";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    await store.dispatch(getBlogPage());
  }
);

const BlogPage = () => {
  const { blog } = useSelector(({ blog }) => blog);

  return (
    <div>
      <Head>
        <title>{blog.seo_section.meta_title}</title>
        <meta
          key="description"
          name="description"
          content={blog.seo_section.meta_description}
        />
        <meta
          key="keywords"
          name="keywords"
          content={blog.seo_section.meta_tag.map((tag) => `${tag}, `)}
        />
      </Head>
      <BlogComponent />
    </div>
  );
};

export default BlogPage;
