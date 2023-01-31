import { Col, Row } from "antd";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuotationPage } from "../../store/slices/quotation/quotationSlice";
import { PageHeading_section } from "../tools/sections/pageHeading_section";
import { RequestQutation_form } from "./form/requestQutation_form";
import style from "./style/requestQutation.module.scss";

export const RequestQutaitonComponent = () => {
  const { quotation } = useSelector(({ quotation }) => quotation);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getQuotationPage());
  // }, []);

  return (
    <div className={style.requestQutation}>
      <PageHeading_section data={quotation?.cover_section} />
      <div className="requestQutationSection container_">
        <Row>
          <Col xs={24} lg={12}>
            <div
              className="imgContainer overlay"
              style={{
                backgroundImage: `url(${quotation?.quotation_section.image})`,
              }}
            ></div>
          </Col>
          <Col xs={24} lg={12}>
            <div className="requestQutationContent">
              {/* <span className="subTitle">
                {quotation?.quotation_section.subtitle}
              </span> */}
              <h3>{quotation?.quotation_section.title}</h3>
              {/* <p>{quotation?.quotation_section.description}</p> */}
              <RequestQutation_form />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
