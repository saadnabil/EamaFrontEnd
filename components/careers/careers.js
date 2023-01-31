import style from "./style/careers.module.scss";
import { PageHeading_section } from "../tools/sections/pageHeading_section";
import { Col, Row } from "antd";
import Image from "next/image";
import { Careers_form } from "./forms/careers_form";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCareersPage } from "../../store/slices/careers/careersSlice";

export const CareersComponent = () => {
  const { careers } = useSelector(({ careers }) => careers);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getCareersPage());
  // }, []);

  return (
    <div className={style.careers}>
      <PageHeading_section data={careers.cover_section} />
      <div className="careersContent container_">
        <Row>
          <Col xs={24} lg={12}>
            <div
              className="imgContainer overlay"
              style={{
                backgroundImage: `url(${careers.quotation_section?.image})`,
              }}
            />
          </Col>
          <Col xs={24} lg={12}>
            <div className="content">
              {/* <span className="subTitle">
                {careers.quotation_section?.subtitle}
              </span> */}
              <h3>{careers.quotation_section?.title}</h3>
              {/* <p>{careers.quotation_section?.description}</p> */}
              <Careers_form />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
