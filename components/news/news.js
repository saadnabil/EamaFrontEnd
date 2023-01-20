import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNewsPage } from "../../store/slices/news/news";
import { PageHeading_section } from "../tools/sections/pageHeading_section";
import { NewsCard_section } from "./sections/newsCard_section";
import style from "./style/news.module.scss";

export const NewsComponent = () => {
  const { news } = useSelector(({ news }) => news);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewsPage());
  }, []);

  const data = {
    image: "/photos/home/bg.png",
    title: "MY NEXT SUMMER HOLIDAY PLAN",
    date: "20/10/200",
    descrition:
      "I usually teach English at a language school in the summer. I often can’t enjoy the summer because I am so busy. So next summer, I’m not planning to work. Instead, I’m going to have a proper summer holiday. I’m going to",
  };
  return (
    <div className={style.news}>
      <PageHeading_section />
      <div className="container_">
        <NewsCard_section data={data} />
        <NewsCard_section data={data} />
      </div>
    </div>
  );
};
