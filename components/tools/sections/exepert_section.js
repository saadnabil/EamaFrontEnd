import { Col, Progress, Row } from "antd";
import Image from "next/image";
import { LineProgress } from "../progress/lineProgress";

export const Exepert_section = ({ data }) => {
  return (
    <div className="expertSection">
      <Row>
        <Col xs={24} lg={12}>
          <div className="left overlay">
            <div
              className="imageTransition"
              style={{ backgroundImage: `url(${data?.image_one})` }}
            />

            <div className="cardContent">
              <h3>{data?.title}</h3>
            </div>
          </div>
        </Col>
        <Col xs={24} lg={12}>
          <div className="right overlay">
            <div
              className="imageTransition"
              style={{ backgroundImage: `url(${data?.image_two})` }}
            />

            <div className="cardContent">
              <p>{data?.descrition}</p>
              <div className="progress">
                <LineProgress
                  max={data?.number_one}
                  time={15}
                  title={data?.title_one}
                />
                <LineProgress
                  max={data?.number_two}
                  time={15}
                  title={data?.title_two}
                />
                <LineProgress
                  max={data?.number_three}
                  time={15}
                  title={data?.title_three}
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
