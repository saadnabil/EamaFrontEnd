import Link from "next/link";
import React from "react";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export const OurProjects_swiper = ({ data }) => {
  const breakpoints = {
    200: {
      slidesPerView: 1,
      spaceBetween: 23,
    },

    400: {
      slidesPerView: 1,
      spaceBetween: 23,
    },

    700: {
      slidesPerView: 1,
      spaceBetween: 40,
    },

    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  };
  return (
    <div className="ourProjectsSwiper">
      <Swiper
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        // navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
        breakpoints={breakpoints}
        speed={1000}
      >
        {data?.map((slider, i) => (
          <SwiperSlide key={i}>
            <div
              className="card overlay"
              style={{
                backgroundImage: `url(${slider?.image})`,
              }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
