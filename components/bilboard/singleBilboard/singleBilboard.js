import { Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleBilboard } from "../../../store/slices/bilboard/bilboardSlice";
import { PageHeading_section } from "../../tools/sections/pageHeading_section";
import { MainSwiper } from "../../tools/swiper/mainSwiper";
import style from "./style/singleBilboard.module.scss";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export const SingleBilboardComponent = () => {
  const { singleBilboard } = useSelector(({ bilboard }) => bilboard);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(getSingleBilboard(router.query.bilboardId));
  }, []);
  console.log(singleBilboard);

  const data = {
    title: singleBilboard.billboard?.subtitle,
    image: singleBilboard.billboard?.cover,
    description: singleBilboard.billboard?.title,
  };

  return (
    <div className={style.singleBilboard}>
      <PageHeading_section data={data} />
      <div className="bilboards container_">
        <div className="bilbaordCard">
          <div className="bilboardContent">
            <h1>90 Street (Downtown)</h1>
            <p>Double decker/ Double side/ Back lit/ 7x16m</p>
          </div>
          <Row gutter={30}>
            <Col xs={24} lg={12}>
              <div
                className="imgContainer"
                style={{ backgroundImage: `url(/photos/home/bg.png)` }}
              />
              <h3 className="imgTitle">Front</h3>
            </Col>
            <Col xs={24} lg={12}>
              <div
                className="imgContainer"
                style={{ backgroundImage: `url(/photos/home/bg.png)` }}
              />
              <h3 className="imgTitle">Back</h3>
            </Col>
          </Row>
        </div>

        <div className="bilbaordCard">
          <div className="bilboardContent">
            <h1>90 Street (Downtown)</h1>
            <p>Double decker/ Double side/ Back lit/ 7x16m</p>
          </div>
          <Row gutter={30}>
            <Col xs={24} lg={12}>
              <div
                className="imgContainer"
                style={{ backgroundImage: `url(/photos/home/bg.png)` }}
              />
              <h3 className="imgTitle">Front</h3>
            </Col>
            <Col xs={24} lg={12}>
              <div
                className="imgContainer"
                style={{ backgroundImage: `url(/photos/home/bg.png)` }}
              />
              <h3 className="imgTitle">Back</h3>
            </Col>
          </Row>
        </div>
      </div>
      <div className="nextAndPrev container_">
        <Link href={"/"}>
          <div className="next">
            <BsChevronLeft /> 6th of October Bridge
          </div>
        </Link>
        <Link href={"/"}>
          <div className="prev">
            N.A (Mehwar El-Mosheer) <BsChevronRight />
          </div>
        </Link>
      </div>
    </div>
  );
};
