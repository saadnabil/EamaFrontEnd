import Head from "next/head";
import { ContactUsComponent } from "../components/contact-us/contactUs";
import { getContactPage } from "../store/slices/contact/contactSlice";
import { wrapper } from "../store/store";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    await store.dispatch(getContactPage());
  }
);

const ContactUsPage = () => {
  return (
    <div>
      <Head>
        <title>emma website</title>
        <meta key="description" name="description" content="My new title" />
        <meta key="keywords" name="keywords" content="My, new, title" />
      </Head>
      <ContactUsComponent />
    </div>
  );
};

export default ContactUsPage;
