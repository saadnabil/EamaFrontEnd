import { BilboardComponent } from "../../components/bilboard/bilboard";
import Head from "next/head";
import { wrapper } from "../../store/store";
import { getBilboardPage } from "../../store/slices/bilboard/bilboardSlice";
import { useSelector } from "react-redux";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    await store.dispatch(getBilboardPage());
  }
);

const BilbaordPage = () => {
  const { bilboard } = useSelector(({ bilboard }) => bilboard);

  return (
    <div>
      <Head>
        <title>{bilboard.seo_section?.meta_title}</title>
        <meta
          key="description"
          name="description"
          content={bilboard.seo_section.meta_description}
        />
        <meta
          key="keywords"
          name="keywords"
          content={bilboard.seo_section.meta_tag.map((tag) => `${tag}, `)}
        />
      </Head>
      <BilboardComponent />
    </div>
  );
};

export default BilbaordPage;
