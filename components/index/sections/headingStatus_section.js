import { Col, Row } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import CountUp from "react-countup";
import { useSelector } from "react-redux";
import ScrollTrigger from "react-scroll-trigger";

export const HeadingStatus_section = () => {
  const [countOn, setCountOn] = useState(false);
  const { index } = useSelector(({ index }) => index);

  return (
    <div className="headingStatus container_">
      <Row gutter={20}>
        <Col lg={12}>
          <h2 className="mainHeading">
            {/* {index.slider_section.title} */}
            WE CREATE MASS PUBLIC'S EYE <span>ATTENTION</span>
          </h2>
          {index.slider_section?.subtitle && (
            <Link href="/about">{index.slider_section?.subtitle}</Link>
          )}
        </Col>
        <Col lg={12}>
          <p>{index.slider_section?.description}</p>
          <ul>
            <li>
              <ScrollTrigger
                onEnter={() => setCountOn(true)}
                onExit={() => setCountOn(false)}
              >
                {countOn && (
                  <span>
                    <CountUp
                      start={0}
                      end={+index.slider_section?.number_one}
                      duration={2}
                      delay={0}
                    />
                  </span>
                )}
              </ScrollTrigger>
              <h4>{index.slider_section?.title_one}</h4>
            </li>
            <li>
              <ScrollTrigger
                onEnter={() => setCountOn(true)}
                onExit={() => setCountOn(false)}
              >
                {countOn && (
                  <span>
                    <CountUp
                      start={0}
                      end={index.slider_section?.number_two}
                      duration={2}
                      delay={0}
                    />
                  </span>
                )}
              </ScrollTrigger>
              <h4>{index.slider_section?.title_two}</h4>
            </li>
            <li>
              <ScrollTrigger
                onEnter={() => setCountOn(true)}
                onExit={() => setCountOn(false)}
              >
                {countOn && (
                  <span>
                    <CountUp
                      start={0}
                      end={index.slider_section?.number_three}
                      duration={2}
                      delay={0}
                    />
                  </span>
                )}
              </ScrollTrigger>
              <h4>{index.slider_section?.title_three}</h4>
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  );
};
