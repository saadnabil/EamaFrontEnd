import { Progress } from "antd";
import { useState, useEffect } from "react";
import { Fade } from "react-reveal";
import ScrollTrigger from "react-scroll-trigger";

export const CircleProgress = ({ max, time, title }) => {
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
    <div className="progressCard">
      <ScrollTrigger onEnter={onEnter} onExit={onExit}>
        <Progress
          type="circle"
          strokeWidth={3}
          strokeColor="#f90606"
          percent={percent}
        />
        <Fade bottom>
          <h4>{title}</h4>
        </Fade>
      </ScrollTrigger>
    </div>
  );
};
