import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAboutPage } from "../../store/slices/about/aboutSlice";
import { Contact_section } from "../tools/sections/contact_section";
import { Customers_section } from "../tools/sections/customers_section";
import { Exepert_section } from "../tools/sections/exepert_section";
import { OurTeam_section } from "../tools/sections/ourTeam_section";
import { PageHeading_section } from "../tools/sections/pageHeading_section";
import { Testimonials_section } from "../tools/sections/testimonials_section";
import { Numbers_section } from "./sections/numbers_section";
import { WhoAreYou_section } from "./sections/whoAreYou_section";
import style from "./style/about.module.scss";

export const AboutComponent = () => {
  const { about } = useSelector(({ about }) => about);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getAboutPage());
  // }, []);

  return (
    <div className={style.about}>
      <PageHeading_section data={about.cover_section} />
      <WhoAreYou_section />
      {/* <Numbers_section />
      <Exepert_section data={about.statistic_section_one} />
      <div className="container_">
        <Testimonials_section
          data={about.testimonials}
          titleData={about.testimonial_section}
        />
      </div>
    <Contact_section data={about.faq_section} /> */}
      <OurTeam_section data={about.team} titleData={about.team_section} />
      {/* <Customers_section data={about.client} /> */}
    </div>
  );
};
