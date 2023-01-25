import { Col, Row } from "antd";
import Image from "next/image";

export const NewsCard_section = ({ data }) => {
  return (
    <div className="newsCard">
      <Row gutter={60}>
        <Col xs={24} lg={12}>
          <div className="left  ">
            {data?.thumbnail && (
              <Image
                src={data.thumbnail}
                width={670}
                height={508}
                layout="responsive"
                alt="outDoor"
              />
            )}
          </div>
        </Col>
        <Col xs={24} lg={12}>
          <div className="right">
            <h3 className="mainHeading">{data?.title}</h3>
            <span>{data?.date}</span>
            <p>{data?.description}</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};
