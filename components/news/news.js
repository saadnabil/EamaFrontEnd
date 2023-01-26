import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNewsPage } from "../../store/slices/news/news";
import { PaginationS1 } from "../tools/pagination/paginationS1";
import { PageHeading_section } from "../tools/sections/pageHeading_section";
import { NewsCard_section } from "./sections/newsCard_section";
import style from "./style/news.module.scss";

export const NewsComponent = () => {
  const { news } = useSelector(({ news }) => news);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewsPage());
  }, []);

  const changePagination = (url) => {
    dispatch(getNewsPage(url.split("?page=")[1]));
  };

  return (
    <div className={style.news}>
      <PageHeading_section data={news.cover_section} />
      <div className="container_">
        {news.news?.data.map((data) => (
          <NewsCard_section data={data} key={data.id} />
        ))}
      </div>

      <PaginationS1
        links={news.news?.meta.links}
        changePagination={changePagination}
      />
    </div>
  );
};
