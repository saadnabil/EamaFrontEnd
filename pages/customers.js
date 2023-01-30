import Head from "next/head";
import { useSelector } from "react-redux";
import { CustomersComponent } from "../components/customers/customers";
import { getCustomersPage } from "../store/slices/customers/customersSlice";
import { wrapper } from "../store/store";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    await store.dispatch(getCustomersPage());
  }
);

const CustomersPage = () => {
  const { customers } = useSelector(({ customers }) => customers);

  return (
    <div>
      <Head>
        <title>{customers.seo_section.meta_title}</title>
        <meta
          key="description"
          name="description"
          content={customers.seo_section.meta_description}
        />
        <meta
          key="keywords"
          name="keywords"
          content={customers.seo_section.meta_tag.map((tag) => `${tag}, `)}
        />
      </Head>
      <CustomersComponent />
    </div>
  );
};

export default CustomersPage;
