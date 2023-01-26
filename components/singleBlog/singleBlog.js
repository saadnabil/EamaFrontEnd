import { Col, Row } from "antd";
import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleBlogThunk } from "../../store/slices/blog/blogSlice";
import { PageHeading_section } from "../tools/sections/pageHeading_section";
import { MainSwiper } from "../tools/swiper/mainSwiper";
import { BlogVideo_section } from "./sections/blogVideo_section";
import { RelatedBlog_section } from "./sections/relatedBlog_section";
import style from "./style/singleBlog.module.scss";

export const SingleBlogComponent = () => {
  const { singleBlog } = useSelector(({ blog }) => blog);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(getSingleBlogThunk(router.query.blogId));
  }, []);

  const data = {
    title: singleBlog.blog?.subtitle,
    image: singleBlog.blog?.cover,
    description: singleBlog.blog?.title,
  };

  return (
    <div className={style.singleBlog}>
      <PageHeading_section data={data} />
      <div className="container_">
        <Row gutter={30}>
          <Col xs={24} lg={12}>
            <div className="blogContent">
              <h1 className="mainHeading">{singleBlog.blog?.title}</h1>
              <p>{singleBlog.blog?.description}</p>
              <p className="date">{singleBlog.blog?.date}</p>
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <MainSwiper images={singleBlog.blog?.images} />
          </Col>
        </Row>
        <RelatedBlog_section />
      </div>
      {/* <BlogVideo_section /> */}
    </div>
  );
};
