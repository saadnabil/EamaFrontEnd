import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Fade } from "react-reveal";
import { getBilboardPage } from "../../store/slices/bilboard/bilboardSlice";
import BlogCard_section from "../tools/cards/blogCard_section";
import { PaginationS1 } from "../tools/pagination/paginationS1";
import { PageHeading_section } from "../tools/sections/pageHeading_section";

export const BilboardComponent = () => {
  const { bilboard } = useSelector(({ bilboard }) => bilboard);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBilboardPage());
  }, []);

  console.log(bilboard);

  const changePagination = (url) => {
    dispatch(getBilboardPage(url.split("?page=")[1]));
  };

  return (
    <div>
      <PageHeading_section data={bilboard.cover_section} />
      <div className="container_">
        {bilboard.billboards?.data.map((blog, i) => (
          <Fade bottom>
            <BlogCard_section data={blog} dir={i} />
          </Fade>
        ))}
      </div>
      <PaginationS1
        links={bilboard.billboards?.meta.links}
        changePagination={changePagination}
      />
    </div>
  );
};
