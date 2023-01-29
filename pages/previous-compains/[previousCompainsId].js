import Head from "next/head";
import { SinglePreviousCompainsComponent } from "../../components/previous-compains/single-previous-compains/singlePreviousCompains";
import { getSinglePreviousCompainsThunk } from "../../store/slices/previousCompains/previousCompains";
import { wrapper } from "../../store/store";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    await store.dispatch(
      getSinglePreviousCompainsThunk(context.query.previousCompainsId)
    );
  }
);

const SinglePreviousCompains = () => {
  return (
    <div>
      <Head>
        <title>emma website</title>
        <meta key="description" name="description" content="My new title" />
        <meta key="keywords" name="keywords" content="My, new, title" />
      </Head>

      <SinglePreviousCompainsComponent />
    </div>
  );
};

export default SinglePreviousCompains;
