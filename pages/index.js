import Head from "next/head";
import Index from "@components/index/index";
import { useSelector } from "react-redux";
import { getIndexPage } from "../store/slices/index/indexSlice";
import { wrapper } from "../store/store";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    await store.dispatch(getIndexPage());
  }
);

export default function Home() {
  const { index } = useSelector(({ index }) => index);

  return (
    <div>
      <Head>
        <title>{index.seo_section?.meta_title}</title>
        <meta
          key="description"
          name="description"
          content={index.seo_section?.meta_description}
        />
        <meta
          key="keywords"
          name="keywords"
          content={index.seo_section?.meta_tag.map((tag) => `${tag}, `)}
        />
      </Head>

      <Index />
    </div>
  );
}
