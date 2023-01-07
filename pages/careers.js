import Head from "next/head";
import { CareersComponent } from "../components/careers/careers";
import { getCareersPage } from "../store/slices/careers/careersSlice";
import { wrapper } from "../store/store";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    await store.dispatch(getCareersPage());
  }
);
const CareersPage = () => {
  return (
    <div>
      <Head>
        <title>emma website</title>
        <meta key="description" name="description" content="My new title" />
        <meta key="keywords" name="keywords" content="My, new, title" />
      </Head>
      <CareersComponent />
    </div>
  );
};

export default CareersPage;
