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
        <title>emma website</title>
        <meta key="description" name="description" content="My new title" />
        <meta key="keywords" name="keywords" content="My, new, title" />
      </Head>

      <Index />
    </div>
  );
}
