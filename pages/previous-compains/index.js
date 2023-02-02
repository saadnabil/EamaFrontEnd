import Head from "next/head";
import { useSelector } from "react-redux";
import { PreviousCompainsComponent } from "../../components/previous-compains/previousCompains";
import { getPreviousCompainsPage } from "../../store/slices/previousCompains/previousCompains";
import { wrapper } from "../../store/store";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    await store.dispatch(getPreviousCompainsPage());
  }
);

const PreviousCompainsPage = () => {
  const { previousCompains } = useSelector(
    ({ previousCompains }) => previousCompains
  );

  return (
    <div>
      <Head>
        <title>{previousCompains.seo_section?.meta_title}</title>
        <meta
          key="description"
          name="description"
          content={previousCompains.seo_section?.meta_description}
        />
        <meta
          key="keywords"
          name="keywords"
          content={previousCompains.seo_section?.meta_tag.map(
            (tag) => `${tag}, `
          )}
        />
      </Head>
      <PreviousCompainsComponent />
    </div>
  );
};

export default PreviousCompainsPage;
