import { Col, Row } from "antd";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleBilboard } from "../../../store/slices/bilboard/bilboardSlice";
import { PageHeading_section } from "../../tools/sections/pageHeading_section";
import { MainSwiper } from "../../tools/swiper/mainSwiper";
import style from "./style/singleBilboard.module.scss";

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

  // const data = {
  //   id: 1,
  //   subTitle: "REAL ESTATE",
  //   title: "Luxury designer penthouse",
  //   description:
  //     "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. User generated content in real-time. Fusce rhoncus sapien ultrices, porttitor lectus id, Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. User generated content in real-time. Fusce rhoncus sapien ultrices, porttitor lectus id, Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. User generated content in real-time. Fusce rhoncus sapien ultrices, porttitor lectus id,",
  //   images: [
  //     { id: 1, url: "/photos/home/headSection/1.jpg" },
  //     { id: 2, url: "/photos/home/headSection/1.jpg" },
  //     { id: 3, url: "/photos/home/headSection/1.jpg" },
  //   ],
  //   relatedBlogs: [
  //     { id: 1, url: "/photos/home/headSection/1.jpg" },
  //     { id: 2, url: "/photos/home/headSection/1.jpg" },
  //   ],
  //   videoUrl: "http://www.youtube.com/watch",
  // };
  return (
    <div className={style.singleBilboard}>
      <PageHeading_section data={data} />
      <div className="bilboards container_">
        <Row gutter={30}>
          <Col xs={24} lg={12}>
            <div className="bilboardContent">
              <h1 className="mainHeading">{singleBilboard.billboard?.title}</h1>
              <p>{singleBilboard.billboard?.description}</p>
              <p className="date">{singleBilboard.billboard?.date}</p>
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <MainSwiper images={singleBilboard.billboard?.images} />
          </Col>
        </Row>
      </div>
    </div>
  );
};
