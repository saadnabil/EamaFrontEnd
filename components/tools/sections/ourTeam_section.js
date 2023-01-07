import { Col, Row } from "antd";
import React from "react";

export const OurTeam_section = ({ data, titleData }) => {
  return (
    <div
      className="ourTeamSection container_ overlay"
      style={{ backgroundImage: `url(${titleData?.image})` }}
    >
      <div className="heading">
        <span className="subTitle">{titleData?.subtitle}</span>
        <h3 className="mainHeading">
          {titleData?.title} <span>.</span>
        </h3>
      </div>
      <Row gutter={40}>
        {data?.map((teamMember, i) => (
          <Col xs={24} md={8} key={i}>
            <div className="teamMember">
              <div
                className="image"
                style={{
                  backgroundImage: `url(${teamMember?.image})`,
                }}
              />
              <div className="info">
                <h3>{teamMember.name}</h3>
                <p>{teamMember.description}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};
