import React from "react";
import { Customers_swiper } from "./swipers/customers_swiper";

export const Customers_section = ({ data }) => {
  return (
    <div className="customersSection container_">
      <Customers_swiper data={data} />
    </div>
  );
};
