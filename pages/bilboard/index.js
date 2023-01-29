import { BilboardComponent } from "../../components/bilboard/bilboard";
import Head from "next/head";
import { wrapper } from "../../store/store";
import { getBilboardPage } from "../../store/slices/bilboard/bilboardSlice";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    await store.dispatch(getBilboardPage());
  }
);

const BilbaordPage = () => {
  return (
    <div>
      <Head>
        <title>emma website</title>
        <meta key="description" name="description" content="My new title" />
        <meta key="keywords" name="keywords" content="My, new, title" />
      </Head>
      <BilboardComponent />
    </div>
  );
};

export default BilbaordPage;
