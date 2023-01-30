import Head from "next/head";
import { useSelector } from "react-redux";
import { AboutComponent } from "../components/about/about";
import { getAboutPage } from "../store/slices/about/aboutSlice";
import { wrapper } from "../store/store";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    await store.dispatch(getAboutPage());
  }
);

const AboutPage = () => {
  const { about } = useSelector(({ about }) => about);

  return (
    <div>
      <Head>
        <title>{about.seo_section.meta_title}</title>
        <meta
          key="description"
          name="description"
          content={about.seo_section.meta_description}
        />
        <meta
          key="keywords"
          name="keywords"
          content={about.seo_section.meta_tag.map((tag) => `${tag}, `)}
        />
      </Head>
      <AboutComponent />
    </div>
  );
};

export default AboutPage;
