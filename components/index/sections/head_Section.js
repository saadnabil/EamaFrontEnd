import { Head_swiper } from "../swiper/head_swiper";
import { HeadingStatus_section } from "./headingStatus_section";
export default function HeadSection() {
  const ScrollDown = () => {
    var element = document.getElementById("scroll");
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <section className="headSection">
        <Head_swiper />
        <div className="container_">
          <HeadingStatus_section />
        </div>
      </section>
    </>
  );
}
