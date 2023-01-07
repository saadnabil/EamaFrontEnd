import { Col, Row } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import CountUp from "react-countup";
import { useSelector } from "react-redux";
import ScrollTrigger from "react-scroll-trigger";

export const Numbers_section = () => {
  const [countOn, setCountOn] = useState(false);
  const { about } = useSelector(({ about }) => about);

  const numbers = about.statistic_section_two;

  return (
    <div className="numbersSection container_">
      <Row gutter={20}>
        <Col xs={12} md={8}>
          <div className="numberCard">
            <ScrollTrigger
              onEnter={() => setCountOn(true)}
              onExit={() => setCountOn(false)}
            >
              {countOn && (
                <span>
                  <CountUp
                    start={0}
                    end={numbers.number_one}
                    duration={2}
                    delay={0}
                  />
                </span>
              )}
            </ScrollTrigger>
            <h4>{numbers?.title_one}</h4>
          </div>
        </Col>
        <Col xs={12} md={8}>
          <div className="numberCard">
            <ScrollTrigger
              onEnter={() => setCountOn(true)}
              onExit={() => setCountOn(false)}
            >
              {countOn && (
                <span>
                  <CountUp
                    start={0}
                    end={numbers?.number_two}
                    duration={2}
                    delay={0}
                  />
                </span>
              )}
            </ScrollTrigger>
            <h4>{numbers?.title_two}</h4>
          </div>
        </Col>
        <Col xs={12} md={8}>
          <div className="numberCard">
            <ScrollTrigger
              onEnter={() => setCountOn(true)}
              onExit={() => setCountOn(false)}
            >
              {countOn && (
                <span>
                  <CountUp
                    start={0}
                    end={numbers?.number_three}
                    duration={2}
                    delay={0}
                  />
                </span>
              )}
            </ScrollTrigger>
            <h4>{numbers?.title_three}</h4>
          </div>
        </Col>
        {/* <Col xs={12} md={6}>
          <div className="numberCard">
            <ScrollTrigger
              onEnter={() => setCountOn(true)}
              onExit={() => setCountOn(false)}
            >
              {countOn && (
                <span>
                  <CountUp start={0} end={250} duration={2} delay={0} />
                </span>
              )}
            </ScrollTrigger>
            <h4>Screens Place</h4>
          </div>
        </Col> */}
      </Row>
    </div>
  );
};
