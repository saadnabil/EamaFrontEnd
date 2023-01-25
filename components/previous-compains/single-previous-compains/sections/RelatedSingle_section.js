import { Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

export const RelatedSingle_section = () => {
  const { singlePreviousCompains } = useSelector(
    ({ previousCompains }) => previousCompains
  );
  return (
    <div className="relatedSingleCompain">
      <h2 className="mainHeading">Related Blogs</h2>
      <Row gutter={30}>
        {singlePreviousCompains.related_campaign?.map((related) => (
          <Link href={`/previous-compains/${related.id}`}>
            <Col xs={24} lg={8}>
              <div className="relatedCard">
                <Image
                  src={related.thumbnail}
                  width={300}
                  height={250}
                  layout="responsive"
                />
                <h3 className="cardHeading">{related.title}</h3>
              </div>
            </Col>
          </Link>
        ))}
      </Row>
    </div>
  );
};
