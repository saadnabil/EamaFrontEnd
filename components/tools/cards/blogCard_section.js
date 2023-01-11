import { Col, Row } from "antd";
import Link from "next/link";
import { MainSwiper } from "../swiper/mainSwiper";
import style from "./cards.module.scss";
import ButtonsS1 from "../buttons/buttonsS1";

const BlogCard_section = ({ data, dir, type }) => {
  return (
    <div className={style.blogCard}>
      <Row
        gutter={30}
        className={dir % 2 === 1 ? "flexCenter" : "flexCenterReverse"}
      >
        <Col xs={24} lg={12}>
          <MainSwiper images={data?.images} />
        </Col>
        <Col xs={24} lg={12}>
          <div className="cardInfo">
            <div className="subTitle">{data?.subtitle}</div>
            <Link href={`/${type}/${data?.id}`}>
              <h3>{data?.title}</h3>
            </Link>
            <p>{data?.description}</p>
            {data?.pdfLink && <ButtonsS1 text="view more" />}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default BlogCard_section;
