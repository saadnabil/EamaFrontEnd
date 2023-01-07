import { Testimonials_swiper } from "./swipers/testimonials_swiper";
import { FaQuoteLeft } from "react-icons/fa";

export const Testimonials_section = ({ data, titleData }) => {
  return (
    <div className="testimonialsSection">
      <div className="contentHeading">
        <div className="icon">
          <FaQuoteLeft />
        </div>
        <h3 className="mainHeading">{titleData?.title}</h3>
      </div>
      <Testimonials_swiper data={data} />
    </div>
  );
};
