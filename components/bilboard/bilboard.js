import { Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Fade } from "react-reveal";
import { getBilboardPage } from "../../store/slices/bilboard/bilboardSlice";
import BlogCard_section from "../tools/cards/blogCard_section";
import { PageHeading_section } from "../tools/sections/pageHeading_section";
import style from "./style/bilboard.module.scss";

export const BilboardComponent = () => {
  const { bilboard } = useSelector(({ bilboard }) => bilboard);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBilboardPage());
  }, []);

  console.log(bilboard);

  return (
    <div className={style.bilboard}>
      <PageHeading_section data={bilboard.cover_section} />
      <div className="container_">
        <Row gutter={20}>
          {bilboard.locations?.data.map((bilboard, i) => (
            <Col xs={24} sm={12} lg={8} key={bilboard.id}>
              <Link href={`/bilboard/${bilboard.id}`}>
                <div className="bilboardCard overlay">
                  <Image src={bilboard.thumbnail} layout="fill" />
                  <div className="content">
                    <h3>{bilboard.location}</h3>
                  </div>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};
