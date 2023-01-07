import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCustomersPage } from "../../store/slices/customers/customersSlice";
import { PageHeading_section } from "../tools/sections/pageHeading_section";
import { Customers_section } from "./sections/customers_section";
import style from "./style/customers.module.scss";

export const CustomersComponent = () => {
  const { customers } = useSelector(({ customers }) => customers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCustomersPage());
  }, []);

  console.log(customers.cover_section);

  return (
    <div className={style.customers}>
      <PageHeading_section data={customers.cover_section} />
      <Customers_section />
    </div>
  );
};
