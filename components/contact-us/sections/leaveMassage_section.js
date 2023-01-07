import { Col, Row } from "antd";
import Image from "next/image";
import { LeaveMassage_form } from "../forms/leaveMassage_form";

export const LeaveMassage_section = () => {
  return (
    <div className="leaveMassageSection container_">
      <Row>
        <Col xs={24} lg={12}>
          <div className="imgContainer overlay">
            <Image
              src="/photos/home/headSection/1.jpg"
              width={500}
              height={900}
              layout="responsive"
              alt=""
            />
          </div>
        </Col>
        <Col xs={24} lg={12}>
          <div className="content">
            <span className="subTitle">give a review</span>
            <h3>leave a massage</h3>
            <p>
              loream loream loream loream loream loream loream loream loream
              loream loream loream loream
            </p>
            <LeaveMassage_form />
          </div>
        </Col>
      </Row>
    </div>
  );
};
