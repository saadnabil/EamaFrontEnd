import Image from "next/image";
import { useSelector } from "react-redux";
import { Testimonials_section } from "../../tools/sections/testimonials_section";

export const OurProjects_section = () => {
  const { index } = useSelector(({ index }) => index);

  const ourProjects = index.project_section;

  return (
    <div className="ourProjectsSection">
      <div className="topHeading">
        <Image src="/photos/home/bgOurProjcets.jpg" layout="fill" alt="bg" />
        <div className="headingContent">
          {/* <span className="subTitle">{ourProjects?.subtitle}</span> */}
          <h3 className="mainHeading">
            {ourProjects?.title} <span>.</span>
          </h3>
        </div>
      </div>
      <div className="content container_">
        <div
          className="ads"
          style={{ backgroundImage: `url(${ourProjects?.image})` }}
        />
        <Testimonials_section
          data={index?.testimonials}
          titleData={index?.testimonial_section}
        />
      </div>
    </div>
  );
};
