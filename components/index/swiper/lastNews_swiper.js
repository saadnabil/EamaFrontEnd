import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Image from "next/image";
import Link from "next/link";
import { BsSave2 } from "react-icons/bs";

export const LastNews_swiper = ({ data }) => {
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
      slidesPerView: 3,
      spaceBetween: 40,
    },
  };
  return (
    <div className="lastNewsSwiper">
      <Swiper
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={breakpoints}
        speed={1000}
      >
        {/* {data?.map((slider, i) => (
          <SwiperSlide key={i}>
            <div
              className="card overlay"
              style={{
                backgroundImage: `url(${slider?.thumbnail})`,
              }}
            >
              <div className="content">
                <div className="date">
                  30 <br /> <span>Dec</span>
                </div>
                <div className="title">{slider.title} </div>

                <Link href={`blog/${slider.id}`}>
                  <div className="readMore">read more</div>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))} */}
      </Swiper>
    </div>
  );
};
