import { Col, Row } from "antd";
import Image from "next/image";
import { useSelector } from "react-redux";

export const WhoAreYou_section = () => {
  const { about } = useSelector(({ about }) => about);

  const whoAreYou = about.about_section;

  return (
    <div className="whoAreYouSection container_">
      <Row gutter={30}>
        <Col lg={12}>
          <div className="content">
            <h2>{whoAreYou?.title}</h2>
            <p>{whoAreYou?.description}</p>
          </div>
        </Col>
        <Col lg={12}>
          {whoAreYou?.image && (
            <Image src={whoAreYou?.image} width={500} height={600} alt="bg" />
          )}
        </Col>
      </Row>
      <div className="cards">
        <Row gutter={30}>
          <Col lg={6}>
            <div className="card">
              <h3>{whoAreYou?.title_one}</h3>
              <p>{whoAreYou?.description_one}</p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="card">
              <h3>{whoAreYou?.title_two}</h3>
              <p>{whoAreYou?.description_two}</p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="card">
              <h3>{whoAreYou?.title_three}</h3>
              <p>{whoAreYou?.description_three}</p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
