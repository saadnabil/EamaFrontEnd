import { Col, Row } from "antd";
import Image from "next/image";
import React from "react";
import { PageHeading_section } from "../tools/sections/pageHeading_section";
import { MainSwiper } from "../tools/swiper/mainSwiper";
import { BlogVideo_section } from "./sections/blogVideo_section";
import { RelatedBlog_section } from "./sections/relatedBlog_section";
import style from "./style/singleBlog.module.scss";

export const SingleBlogComponent = () => {
  const data = {
    id: 1,
    subTitle: "REAL ESTATE",
    title: "Luxury designer penthouse",
    description:
      "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. User generated content in real-time. Fusce rhoncus sapien ultrices, porttitor lectus id, Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. User generated content in real-time. Fusce rhoncus sapien ultrices, porttitor lectus id, Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. User generated content in real-time. Fusce rhoncus sapien ultrices, porttitor lectus id,",
    images: [
      { id: 1, url: "/photos/home/headSection/1.jpg" },
      { id: 2, url: "/photos/home/headSection/1.jpg" },
      { id: 3, url: "/photos/home/headSection/1.jpg" },
    ],
    relatedBlogs: [
      { id: 1, url: "/photos/home/headSection/1.jpg" },
      { id: 2, url: "/photos/home/headSection/1.jpg" },
    ],
    videoUrl: "http://www.youtube.com/watch",
  };

  return (
    <div className={style.singleBlog}>
      <PageHeading_section />
      <div className="container_">
        <Row gutter={30}>
          <Col xs={24} lg={12}>
            <div className="blogContent">
              <h1 className="mainHeading">{data.title}</h1>
              <p>{data.description}</p>
              <p className="date">11 / 12 / 2022</p>
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <MainSwiper images={data.images} />
          </Col>
        </Row>
        <RelatedBlog_section />
      </div>
      <BlogVideo_section />
    </div>
  );
};
