import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import Image from "next/image";

export const Customers_swiper = ({ data }) => {
  const breakpoints = {
    200: {
      slidesPerView: 1,
      spaceBetween: 23,
    },

    400: {
      slidesPerView: 2,
      spaceBetween: 23,
    },

    700: {
      slidesPerView: 3,
      spaceBetween: 40,
    },

    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  };
  return (
    <div className="customersSwiper">
      <Swiper
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
        speed={1000}
        breakpoints={breakpoints}
      >
        {data?.map((client, i) => (
          <SwiperSlide>
            <div
              className="card"
              style={{
                backgroundImage: `url(${client?.image})`,
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
