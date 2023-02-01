import React from "react";
import { LastNews_swiper } from "../swiper/lastNews_swiper";

export const LastNews_section = ({ data, titleData }) => {
  console.log(data);
  return (
    <div className="lastNewsSection container_">
      <div className="heading">
        {/* <span className="subTitle">{titleData?.subtitle}</span> */}
        <h3 className="mainHeading">
          {titleData?.title}
        </h3>
      </div>
      <LastNews_swiper data={data} />
    </div>
  );
};
