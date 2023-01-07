import Image from "next/image";
import React from "react";
import { useState } from "react";
import { GrFacebookOption } from "react-icons/gr";
import ModalVideo from "react-modal-video";

export const BlogVideo_section = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="blogVideo overlay">
      <Image
        src="/photos/home/headSection/1.jpg"
        width="100%"
        height="100%"
        layout="responsive"
      />
      <div className="showVideoBtn" onClick={() => setOpen(true)}>
        <GrFacebookOption />
      </div>
      <ModalVideo
        channel="youtube"
        autoplay={true}
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
      />
    </div>
  );
};
