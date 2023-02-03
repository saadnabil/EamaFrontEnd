import Image from "next/image";
import { useSelector } from "react-redux";
import { Testimonials_section } from "../../tools/sections/testimonials_section";
import { OurProjects_swiper } from "../swiper/ourProjects_swiper";

export const OurProjects_section = () => {
  const { index } = useSelector(({ index }) => index);

  const ourProjects = index.project_section;

  // console.log(index.projects);

  return (
    <div className="ourProjectsSection">
      <div className="topHeading">
        <Image src="/photos/home/bgOurProjcets.jpg" layout="fill" alt="bg" />
        <div className="headingContent">
          {/* <span className="subTitle">{ourProjects?.subtitle}</span> */}
          <h3 className="mainHeading">{ourProjects?.title}</h3>
        </div>
        <div className="container_">
          <OurProjects_swiper data={index.projects} />
        </div>
      </div>
      <div className="content container_">
        {/* <div
          className="ads"
          style={{ backgroundImage: `url(${ourProjects?.image})` }}
        /> */}

        <Testimonials_section
          data={index?.testimonials}
          titleData={index?.testimonial_section}
        />
      </div>
    </div>
  );
};
