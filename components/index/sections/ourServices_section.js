import { Col, Row } from "antd";
import { useSelector } from "react-redux";
import { ServicesCard } from "../../tools/cards/servicesCard";

export const OurServices_section = () => {
  const { index } = useSelector(({ index }) => index);

  return (
    <div className="ourServices container_">
      <div className="heading">
        <span>WHAT WE DO</span>
        <h3 className="mainHeading">
          OUR SERVICES <span>.</span>
        </h3>
      </div>
      <Row gutter={30}>
        {index.services?.map((service, i) => (
          <Col xs={24} lg={8} key={i}>
            <ServicesCard data={service} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
