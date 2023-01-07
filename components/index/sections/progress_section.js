import { Col, Progress, Row } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CircleProgress } from "../../tools/progress/circleProgress";

export const Progress_section = () => {
  const [countOn, setCountOn] = useState(false);
  const { index } = useSelector(({ index }) => index);

  const progressSection = index.statistic_section_two;

  return (
    <div className="progressSection container_">
      <Row gutter={40}>
        <Col xs={24} lg={12}>
          <div className="progressCards">
            <CircleProgress
              max={progressSection?.number_one}
              time={15}
              title={progressSection?.title_one}
            />
            <CircleProgress
              max={progressSection?.number_two}
              time={15}
              title={progressSection?.title_two}
            />
            <CircleProgress
              max={progressSection?.number_three}
              time={15}
              title={progressSection?.title_three}
            />
          </div>
        </Col>
        <Col xs={24} lg={12}>
          <div className="progressContent">
            <span className="subTitle">{progressSection?.title}</span>
            <h2>{progressSection?.descrition}</h2>
          </div>
        </Col>
      </Row>
    </div>
  );
};
