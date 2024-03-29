import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCustomersPage } from "../../store/slices/customers/customersSlice";
import { Customers_section } from "../tools/sections/customers_section";
import { PageHeading_section } from "../tools/sections/pageHeading_section";
import { Customers_swiper } from "../tools/sections/swipers/customers_swiper";
import { Testimonials_section } from "../tools/sections/testimonials_section";
import style from "./style/customers.module.scss";

export const CustomersComponent = () => {
  const { customers } = useSelector(({ customers }) => customers);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getCustomersPage());
  // }, []);

  return (
    <div className={style.customers}>
      <PageHeading_section data={customers.cover_section} />
      <Customers_section data={customers.client} />
      <div className="container_  ">
        <Testimonials_section
          titleData={customers.testimonial_section}
          data={customers.testimonials}
        />
      </div>
    </div>
  );
};
