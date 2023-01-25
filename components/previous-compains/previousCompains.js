import { PageHeading_section } from "../tools/sections/pageHeading_section";
import { PreviousComapinsCard_section } from "./sections/priviousComapinsCard_section";
import { Col, Row } from "antd";
import style from "./style/previousCompains.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPreviousCompainsPage } from "../../store/slices/previousCompains/previousCompains";

export const PreviousCompainsComponent = () => {
  const { previousCompains } = useSelector(
    ({ previousCompains }) => previousCompains
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPreviousCompainsPage());
  }, []);

  console.log(previousCompains);
  const data = {
    id: 1,
    title: "Dejavu",
    date: "2020",
    cover: "/photos/home/bg.png",
    pdfLink: "http://www.",
  };

  return (
    <div className={style.previousCompains}>
      <PageHeading_section data={previousCompains.cover_section} />
      <div className="container_">
        <Row gutter={30}>
          {previousCompains.campaigns.data.map((campaign) => (
            <Col xs={24} lg={8} key={campaign.id}>
              <PreviousComapinsCard_section data={campaign} />
            </Col>
          ))}
          {/* <Col xs={24} lg={8}>
            <PreviousComapinsCard_section data={data} />
          </Col>
          <Col xs={24} lg={8}>
            <PreviousComapinsCard_section data={data} />
          </Col> */}
        </Row>
      </div>
    </div>
  );
};
