import { Col, Collapse, Row } from "antd";
import { Contact_form } from "./forms/contact_form";
const { Panel } = Collapse;

export const Contact_section = ({ data }) => {
  return (
    <div
      className="contactSection container_ overlay"
      style={{ backgroundImage: `url(${data?.image})` }}
    >
      <Row gutter={80}>
        <Col xs={24} lg={12}>
          <div className="contactContent">
            {/* <span className="subTitle">{data?.subtitle}</span> */}
            <h2 className="mainHeading">{data?.title}</h2>
            {/* <p>{data?.description}</p> */}
          </div>
        </Col>
        <Col xs={24} lg={12}>
          <div className="contactForm">
            <h2>
              reach out via the <br /> form below
            </h2>
            <Contact_form />
          </div>
        </Col>
      </Row>
    </div>
  );
};
