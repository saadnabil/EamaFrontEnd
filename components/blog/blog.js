import React, { useEffect } from "react";
import { Fade } from "react-reveal";
import { PageHeading_section } from "../tools/sections/pageHeading_section";
import BlogCard_section from "../tools/cards/blogCard_section";
import style from "./style/blog.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getBlogPage } from "../../store/slices/blog/blogSlice";
import { PaginationS1 } from "../tools/pagination/paginationS1";

export const BlogComponent = () => {
  const { blog } = useSelector(({ blog }) => blog);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogPage());
  }, []);

  const changePagination = (url) => {
    dispatch(getBlogPage(url.split("?page=")[1]));
  };

  return (
    <div className={style.blog}>
      <PageHeading_section data={blog.cover_section} />
      <div className="container_">
        {blog.blogs?.data.map((blog, i) => (
          <Fade bottom>
            <BlogCard_section data={blog} dir={i} type="blog" />
          </Fade>
        ))}
      </div>
      <PaginationS1
        links={blog.blogs?.meta.links}
        changePagination={changePagination}
      />
    </div>
  );
};
