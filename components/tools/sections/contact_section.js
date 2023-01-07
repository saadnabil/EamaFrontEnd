import { Col, Collapse, Row } from "antd";
import { Contact_form } from "./forms/contact_form";
const { Panel } = Collapse;

export const Contact_section = ({ data }) => {
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div
      className="contactSection container_ overlay"
      style={{ backgroundImage: `url(${data?.image})` }}
    >
      <Row gutter={80}>
        <Col xs={24} lg={12}>
          <div className="contactContent">
            <span className="subTitle">{data?.subtitle}</span>
            <h2 className="mainHeading">{data?.title}</h2>
            <Collapse defaultActiveKey={[1]} onChange={onChange} accordion>
              <Panel header="This is panel header 1" key={1}>
                <p>{data?.description} </p>
              </Panel>
              <Panel header="This is panel header 2" key={2}>
                <p>
                  it can be found as a welcome guest in many households across
                  the world.
                </p>
              </Panel>
              <Panel header="This is panel header 3" key={3}>
                <p>
                  it can be found as a welcome guest in many households across
                  the world.
                </p>
              </Panel>
            </Collapse>
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
