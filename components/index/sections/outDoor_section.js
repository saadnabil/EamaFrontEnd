import { Button, Col, Modal, Row } from "antd";
import Image from "next/image";
import { useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import ModalVideo from "react-modal-video";
import { useSelector } from "react-redux";
import { Player } from "video-react";
import "node_modules/video-react/dist/video-react.css";

export const OutDoor_section = () => {
  const [isOpen, setOpen] = useState(false);
  const { index } = useSelector(({ index }) => index);

  return (
    <div className="outDoorSection container_">
      <Row gutter={60}>
        <Col xs={24} lg={12}>
          <div className="left ">
            {/* {index.video_section?.image && (
              // <Image
              //   src={index.video_section?.image}
              //   width={670}
              //   height={608}
              //   layout="responsive"
              //   alt="outDoor"
              // />
              
            )} */}
            <Player
              playsInline
              // poster={index.video_section?.image}
              src={index.video_section?.video_url}
            />
          </div>
        </Col>
        <Col xs={24} lg={12}>
          <div className="right">
            <h3 className="mainHeading">{index.video_section?.title}</h3>
            <p>{index.video_section?.descrition}</p>

            {/* <div className="showVideo" onClick={() => setOpen(true)}>
              <BsFillPlayFill />
            </div> */}
          </div>
        </Col>
      </Row>
      {/* <ModalVideo
        channel="custom"
        autoplay={true}
        isOpen={isOpen}
        url={index.video_section?.video_url}
        onClose={() => setOpen(false)}
      /> */}
    </div>
  );
};
