import { PageHeading_section } from "../tools/sections/pageHeading_section";
import { PreviousComapinsCard_section } from "./sections/priviousComapinsCard_section";
import { Col, Row } from "antd";
import style from "./style/previousCompains.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPreviousCompainsPage } from "../../store/slices/previousCompains/previousCompains";
import { PaginationS1 } from "../tools/pagination/paginationS1";

export const PreviousCompainsComponent = () => {
  const { previousCompains } = useSelector(
    ({ previousCompains }) => previousCompains
  );
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getPreviousCompainsPage());
  // }, []);

  const changePagination = (url) => {
    dispatch(getPreviousCompainsPage(url.split("?page=")[1]));
  };

  return (
    <div className={style.previousCompains}>
      <PageHeading_section data={previousCompains.cover_section} />
      <div className="container_">
        <Row gutter={30}>
          {previousCompains.campaigns?.data.map((campaign) => (
            <Col xs={24} lg={8} key={campaign.id}>
              <PreviousComapinsCard_section data={campaign} />
            </Col>
          ))}
        </Row>
        <PaginationS1
          links={previousCompains.campaigns?.meta.links}
          changePagination={changePagination}
        />
      </div>
    </div>
  );
};
