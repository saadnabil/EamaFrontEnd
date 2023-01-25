import Image from "next/image";
import Link from "next/link";
import React from "react";
import ButtonsS1 from "../../tools/buttons/buttonsS1";

export const PreviousComapinsCard_section = ({ data }) => {
  return (
    <div className="previousComapinsCard">
      <Image
        src={data?.thumbnail}
        width={200}
        height={150}
        layout="responsive"
        alt={data?.title}
      />
      <div className="content">
        <h2>{data?.title}</h2>
        <h4 className="date">{data?.date}</h4>
        {/* <Link href={data?.pdfLink}> */}
        <div>
          <ButtonsS1 text="read more" />
        </div>
        {/* </Link> */}
      </div>
    </div>
  );
};
