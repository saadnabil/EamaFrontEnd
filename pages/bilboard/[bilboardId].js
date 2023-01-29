import Head from "next/head";
import { SingleBilboardComponent } from "../../components/bilboard/singleBilboard/singleBilboard";
import { getSingleBilboard } from "../../store/slices/bilboard/bilboardSlice";
import { wrapper } from "../../store/store";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    await store.dispatch(getSingleBilboard(context.query.bilboardId));
  }
);
const SingleBilboardPage = () => {
  return (
    <div>
      <Head>
        <title>emma website</title>
        <meta key="description" name="description" content="My new title" />
        <meta key="keywords" name="keywords" content="My, new, title" />
      </Head>
      <SingleBilboardComponent />
    </div>
  );
};

export default SingleBilboardPage;
