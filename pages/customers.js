import Head from "next/head";
import { CustomersComponent } from "../components/customers/customers";
import { wrapper } from "@store/store";
import { getCustomersPage } from "../store/slices/customers/customersSlice";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    await store.dispatch(getCustomersPage());
  }
);

const CustomersPage = () => {
  return (
    <div>
      <Head>
        <title>emma website</title>
        <meta key="description" name="description" content="My new title" />
        <meta key="keywords" name="keywords" content="My, new, title" />
      </Head>
      <CustomersComponent />
    </div>
  );
};

export default CustomersPage;
