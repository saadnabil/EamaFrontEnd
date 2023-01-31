import { Col, Row } from "antd";
import Image from "next/image";
import { useSelector } from "react-redux";
import { LeaveMassage_form } from "../forms/leaveMassage_form";

export const LeaveMassage_section = () => {
  const { contact } = useSelector(({ contact }) => contact);

  return (
    <div className="leaveMassageSection container_">
      <Row>
        <Col xs={24} lg={12}>
          <div className="imgContainer overlay">
            <Image
              src={contact.contact_section?.image}
              width={500}
              height={800}
              layout="responsive"
              alt=""
            />
          </div>
        </Col>
        <Col xs={24} lg={12}>
          <div className="content">
            {/* <span className="subTitle">
              {contact.contact_section?.subtitle}
            </span> */}
            <h3>{contact.contact_section?.title}</h3>
            {/* <p>{contact.contact_section?.description}</p> */}
            <LeaveMassage_form />
          </div>
        </Col>
      </Row>
    </div>
  );
};
