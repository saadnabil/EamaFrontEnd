import { Col, Row } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleBilboard } from "../../../store/slices/bilboard/bilboardSlice";
import { PageHeading_section } from "../../tools/sections/pageHeading_section";
import style from "./style/singleBilboard.module.scss";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export const SingleBilboardComponent = () => {
  const { singleBilboard } = useSelector(({ bilboard }) => bilboard);
  // const dispatch = useDispatch();
  // const router = useRouter();

  // useEffect(() => {
  //   dispatch(getSingleBilboard(router.query.bilboardId));
  // }, [router.query]);

  const data = {
    image: singleBilboard.billboard?.thumbnail,
    description: singleBilboard.billboard?.location,
  };

  return (
    <div className={style.singleBilboard}>
      <PageHeading_section data={data} />
      <div className="bilboards container_">
        {singleBilboard.billboard?.billboards?.map((bilboard) => (
          <div className="bilbaordCard" key={bilboard.id}>
            <div className="bilboardContent">
              <h1>{bilboard.title}</h1>
              <p>{bilboard.description}</p>
            </div>
            <Row gutter={30}>
              {bilboard.images.map((image) => (
                <Col xs={24} lg={12} key={image.id}>
                  <div
                    className="imgContainer"
                    style={{ backgroundImage: `url(${image.image})` }}
                  />
                  <h3 className="imgTitle">{image.title}</h3>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </div>
      <div className="nextAndPrev container_">
        {singleBilboard.previous && (
          <Link href={`/bilboard/${singleBilboard.previous?.id}`}>
            <div className="next">
              <BsChevronLeft /> {singleBilboard.previous?.location}
            </div>
          </Link>
        )}

        {singleBilboard.next && (
          <Link href={`/bilboard/${singleBilboard.next?.id}`}>
            <div className="prev">
              {singleBilboard.next?.location} <BsChevronRight />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};
