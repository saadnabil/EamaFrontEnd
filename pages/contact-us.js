import Head from "next/head";
import { useSelector } from "react-redux";
import { ContactUsComponent } from "../components/contact-us/contactUs";
import { getContactPage } from "../store/slices/contact/contactSlice";
import { wrapper } from "../store/store";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    await store.dispatch(getContactPage());
  }
);

const ContactUsPage = () => {
  const { contact } = useSelector(({ contact }) => contact);

  return (
    <div>
      <Head>
        <title>{contact.seo_section.meta_title}</title>
        <meta
          key="description"
          name="description"
          content={contact.seo_section.meta_description}
        />
        <meta
          key="keywords"
          name="keywords"
          content={contact.seo_section.meta_tag.map((tag) => `${tag}, `)}
        />
      </Head>
      <ContactUsComponent />
    </div>
  );
};

export default ContactUsPage;
