import Head from "next/head";
import { AboutComponent } from "../components/about/about";
import { getAboutPage } from "../store/slices/about/aboutSlice";
import { wrapper } from "../store/store";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    await store.dispatch(getAboutPage());
  }
);

const AboutPage = () => {
  return (
    <div>
      <Head>
        <title>emma website</title>
        <meta key="description" name="description" content="My new title" />
        <meta key="keywords" name="keywords" content="My, new, title" />
      </Head>
      <AboutComponent />
    </div>
  );
};

export default AboutPage;
