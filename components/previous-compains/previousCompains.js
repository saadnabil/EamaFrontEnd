import { PageHeading_section } from "../tools/sections/pageHeading_section";
import { PreviousComapinsCard_section } from "./sections/priviousComapinsCard_section";
import { Col, Row } from "antd";
import style from "./style/previousCompains.module.scss";

export const PreviousCompainsComponent = () => {
  const data = {
    id: 1,
    title: "Dejavu",
    date: "2020",
    cover: "/photos/home/bg.png",
    pdfLink: "http://www.",
  };

  return (
    <div className={style.previousCompains}>
      <PageHeading_section />
      <div className="container_">
        <Row gutter={30}>
          <Col xs={24} lg={8}>
            <PreviousComapinsCard_section data={data} />
          </Col>
          <Col xs={24} lg={8}>
            <PreviousComapinsCard_section data={data} />
          </Col>
          <Col xs={24} lg={8}>
            <PreviousComapinsCard_section data={data} />
          </Col>
        </Row>
      </div>
    </div>
  );
};
