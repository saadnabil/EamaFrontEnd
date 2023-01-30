import Head from "next/head";
import { useSelector } from "react-redux";
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
  const { singlePreviousCompains } = useSelector(
    ({ previousCompains }) => previousCompains
  );

  return (
    <div>
      <Head>
        <title>{singlePreviousCompains.campaign.meta_title}</title>
        <meta
          key="description"
          name="description"
          content={singlePreviousCompains.campaign.meta_description}
        />
        <meta
          key="keywords"
          name="keywords"
          content={singlePreviousCompains.campaign.meta_tag.map(
            (tag) => `${tag}, `
          )}
        />
      </Head>

      <SinglePreviousCompainsComponent />
    </div>
  );
};

export default SinglePreviousCompains;
