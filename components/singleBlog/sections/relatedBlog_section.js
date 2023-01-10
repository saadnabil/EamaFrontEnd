import { Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

export const RelatedBlog_section = () => {
  const { singleBlog } = useSelector(({ blog }) => blog);

  console.log(singleBlog.related_blogs);

  return (
    <div className="relatedBlogs">
      <h2 className="mainHeading">Related Blogs</h2>
      <Row gutter={30}>
        {singleBlog.related_blogs?.map((related) => (
          <Link href={`/blog/${related.id}`}>
            <Col xs={24} lg={8}>
              <div className="relatedCard">
                <Image
                  src={related.cover}
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
