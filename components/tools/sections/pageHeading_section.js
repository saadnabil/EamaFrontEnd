import Image from "next/image";
import React from "react";

export const PageHeading_section = ({ data }) => {
  return (
    <div
      className="pageHeading  overlay"
      style={{ backgroundImage: `url(${data?.image})` }}
    >
      <div className="content container_">
        <div className="subTitle">{data?.title}</div>
        <h1 className=" ">{data?.description}</h1>
      </div>
    </div>
  );
};
