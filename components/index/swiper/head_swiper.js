import Image from "next/image";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ButtonsS1 from "../../tools/buttons/buttonsS1";
import { Pagination, Navigation, Autoplay } from "swiper";
import AnimatedText from "react-animated-text-content";
import { useSelector } from "react-redux";
import Link from "next/link";

export const Head_swiper = () => {
  const { index } = useSelector(({ index }) => index);

  return (
    <div className="headSwiper">
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        loop={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
        speed={1000}
        autoplay={{
          delay: 6500,
          disableOnInteraction: false,
        }}
      >
        {index.sliders?.map((slider, i) => (
          <SwiperSlide key={i}>
            <div className="swiperCard overlay">
              <div
                className="imgContainer"
                style={{ backgroundImage: `url(${slider.image})` }}
              >
                {/* <Image src={slider.image} layout="fill" alt="bg" /> */}
              </div>
              <div className="content container_">
                <h1>
                  <AnimatedText
                    type="words"
                    animation={{
                      x: "200px",
                      y: "-20px",
                      scale: 1.1,
                      ease: "ease-in-out",
                    }}
                    animationType="float"
                    interval={0.06}
                    duration={0.8}
                    tag="h1"
                    data-aos="fade-left"
                    className="animated-paragraph"
                    includeWhiteSpaces
                    threshold={0.1}
                    rootMargin="20%"
                  >
                    {slider.title}
                  </AnimatedText>
                </h1>
                <Link href="/bilboard">
                  <div>
                    <ButtonsS1 text="our services" />
                  </div>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
