import Head from "next/head";
import { useSelector } from "react-redux";
import { RequestQutaitonComponent } from "../components/request-qutation/requestQutation";
import { getQuotationPage } from "../store/slices/quotation/quotationSlice";
import { wrapper } from "../store/store";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    await store.dispatch(getQuotationPage());
  }
);

const RequestQutationPage = () => {
  const { quotation } = useSelector(({ quotation }) => quotation);

  return (
    <div>
      <Head>
        <title>{quotation.seo_section.meta_title}</title>
        <meta key="description" name="description" content="My new title" />
        <meta key="keywords" name="keywords" content="My, new, title" />
      </Head>
      <RequestQutaitonComponent />
    </div>
  );
};

export default RequestQutationPage;
