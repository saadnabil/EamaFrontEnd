import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import Image from "next/image";

export const Testimonials_swiper = ({ data }) => {
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
    <div className="testimonialsSwiper">
      <Swiper
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Navigation]}
        // autoplay={{
        //   delay: 3500,
        //   disableOnInteraction: false,
        // }}
        className="mySwiper"
        speed={1000}
        breakpoints={breakpoints}
      >
        {data?.map((slider, i) => (
          <SwiperSlide key={i}>
            <div className="customer">
              <div className="imgContainer">
                <Image
                  src={slider.image}
                  width={200}
                  height={200}
                  alt="imgContainer"
                />
              </div>
              <p>{slider.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
