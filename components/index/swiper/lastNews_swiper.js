import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
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

  console.log(data);
  return (
    <div className="lastNewsSwiper">
      <Swiper
        slidesPerGroup={1}
        loopFillGroupWithBlank={true}
        navigation={true}
        className="mySwiper"
        breakpoints={breakpoints}
        speed={1000}
        // loop={true}
        modules={[Navigation]}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
      >
        {data?.map((slider, i) => (
          <SwiperSlide key={i}>
            <div
              className="card overlay"
              style={{
                backgroundImage: `url(${slider?.thumbnail})`,
              }}
            >
              <div className="content">
                <div className="date">
                  {slider.day} <br /> <span>{slider.month}</span>
                </div>
                <div className="title">{slider.title} </div>

                <Link href={`blog/${slider.id}`}>
                  <div className="readMore">read more</div>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
