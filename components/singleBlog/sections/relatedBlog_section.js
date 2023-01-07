import { Col, Row } from "antd";
import Image from "next/image";

export const RelatedBlog_section = () => {
  return (
    <div className="relatedBlogs">
      <h2 className="mainHeading">Related Blogs</h2>
      <Row gutter={30}>
        <Col xs={24} lg={8}>
          <div className="relatedCard">
            <Image
              src="/photos/home/headSection/1.jpg"
              width={300}
              height={250}
              layout="responsive"
            />
            <h3 className="cardHeading">Luxury designer penthouse</h3>
          </div>
        </Col>
        <Col xs={24} lg={8}>
          <div className="relatedCard">
            <Image
              src="/photos/home/headSection/1.jpg"
              width={300}
              height={250}
              layout="responsive"
            />
            <h3 className="cardHeading">Luxury designer fff penthouse</h3>
          </div>
        </Col>
        <Col xs={24} lg={8}>
          <div className="relatedCard">
            <Image
              src="/photos/home/headSection/1.jpg"
              width={300}
              height={250}
              layout="responsive"
            />
            <h3 className="cardHeading">Luxury designer penthouse</h3>
          </div>
        </Col>
      </Row>
    </div>
  );
};
