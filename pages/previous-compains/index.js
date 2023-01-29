import Head from "next/head";
import { PreviousCompainsComponent } from "../../components/previous-compains/previousCompains";
import { getPreviousCompainsPage } from "../../store/slices/previousCompains/previousCompains";
import { wrapper } from "../../store/store";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    await store.dispatch(getPreviousCompainsPage());
  }
);

const PreviousCompainsPage = () => {
  return (
    <div>
      <Head>
        <title>emma website</title>
        <meta key="description" name="description" content="My new title" />
        <meta key="keywords" name="keywords" content="My, new, title" />
      </Head>
      <PreviousCompainsComponent />
    </div>
  );
};

export default PreviousCompainsPage;
