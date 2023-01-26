import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import Image from "next/image";

export const MainSwiper = ({ images }) => {
  return (
    <div className="mainSwiper">
      <Swiper
        navigation={true}
        loop={true}
        centeredSlides={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
        speed={1000}
        autoPlay={true}
      >
        {images?.map((image) => (
          <SwiperSlide key={image.id}>
            <div className="swiperCard ">
              <div className="imgContainer">
                <Image
                  src={image?.image}
                  width="100%"
                  height="100%"
                  layout="responsive"
                  alt="bg"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
