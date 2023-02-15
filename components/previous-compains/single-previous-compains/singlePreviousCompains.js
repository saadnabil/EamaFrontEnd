import { Col, Row } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSinglePreviousCompainsThunk } from "../../../store/slices/previousCompains/previousCompains";
import { PageHeading_section } from "../../tools/sections/pageHeading_section";
import { MainSwiper } from "../../tools/swiper/mainSwiper";
import { RelatedSingle_section } from "./sections/RelatedSingle_section";
import style from "./style/singlePreviousCompains.module.scss";

export const SinglePreviousCompainsComponent = () => {
  const { singlePreviousCompains } = useSelector(
    ({ previousCompains }) => previousCompains
  );
  // const dispatch = useDispatch();
  // const router = useRouter();
  // useEffect(() => {
  //   dispatch(getSinglePreviousCompainsThunk(router.query.previousCompainsId));
  // }, []);

  const data = {
    title: singlePreviousCompains.campaign?.subtitle,
    image: singlePreviousCompains.campaign?.thumbnail,
    description: singlePreviousCompains.campaign?.title,
  };

  return (
    <div className={style.singlePreviousCompains}>
      <PageHeading_section data={data} />
      <div className="container_">
        <Row gutter={30}>
          <Col xs={24} lg={12}>
            <div className="content">
              <h1 className="mainHeading">
                {singlePreviousCompains.campaign?.title}
              </h1>
              {/* <p>{singlePreviousCompains.campaign?.description}</p> */}
              {/* <p className="date">{singlePreviousCompains.campaign?.year}</p> */}
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <MainSwiper images={singlePreviousCompains.campaign?.images} />
          </Col>
        </Row>
        <RelatedSingle_section />
      </div>
    </div>
  );
};
