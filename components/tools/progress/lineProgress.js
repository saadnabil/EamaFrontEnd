import { Progress } from "antd";
import { useState, useEffect } from "react";
import ScrollTrigger from "react-scroll-trigger";

export const LineProgress = ({ max, time, title }) => {
  const [percent, setPersent] = useState(0);
  const [start, setStart] = useState(false);

  const onEnter = () => {
    setStart(true);
  };

  const onExit = () => {
    setPersent(0);
    setStart(false);
  };

  start &&
    setTimeout(() => {
      if (percent <= max - 1) {
        setPersent(percent + 1);
      }
    }, [time]);

  return (
    <div className="progres">
      <ScrollTrigger onEnter={onEnter} onExit={onExit}>
        <div className="flexBetween">
          <span>{title}</span>
          <span>{percent}%</span>
        </div>
        <Progress
          percent={percent}
          strokeColor="#f90606"
          strokeWidth={4}
          showInfo={false}
        />
      </ScrollTrigger>
    </div>
  );
};
