import { Col, Row } from "antd";
import Image from "next/image";
import { useSelector } from "react-redux";

export const Customers_section = () => {
  const { customers } = useSelector(({ customers }) => customers);

  return (
    <div className="customersSection container_">
      <div className="topHeading">
        {/* <span className="subTitle"> {customers.client_section.subtitle}</span> */}
        <h1 className="mainHeading">{customers.client_section.title}</h1>
      </div>
      <Row>
        {customers.client?.map((customer) => (
          <Col xs={24} sm={12} lg={6} key={customer.id}>
            <div className="customer ">
              <Image src={customer.image} layout="fill" />
              {/* <div className="content">
                <h3>{customer.title}</h3>
              </div> */}
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};
