import { Exepert_section } from "../tools/sections/exepert_section";
import HeadSection from "./sections/head_Section";
import { LastNews_section } from "./sections/lastNews_section";
import { OurProjects_section } from "./sections/ourProjects_section";
import { OurServices_section } from "./sections/ourServices_section";
import { OurTeam_section } from "../tools/sections/ourTeam_section";
import { OutDoor_section } from "./sections/outDoor_section";
import { Progress_section } from "./sections/progress_section";
import { SpringBanner_section } from "./sections/springBanner_section";
import style from "./styles/index.module.scss";
import { Contact_section } from "../tools/sections/contact_section";
import { Customers_section } from "../tools/sections/customers_section";
import { useDispatch, useSelector } from "react-redux";
import { getIndexPage } from "../../store/slices/index/indexSlice";
import { useEffect } from "react";

export default function Home() {
  const { index } = useSelector(({ index }) => index);

  return (
    <section className={style.indexPage}>
      <div className=" indexPage_">
        <HeadSection />
        <OurServices_section />
        {/* <SpringBanner_section /> */}
        <OutDoor_section />
        {/* <Exepert_section data={index.statistic_section_one} /> */}
        {/* <Progress_section /> */}
        <OurProjects_section />
        <OurTeam_section data={index.team} titleData={index.team_section} />
        {/* <Customers_section data={index?.client} /> */}
        <LastNews_section data={index.blog} titleData={index.blog_section} />
        <Contact_section data={index.faq_section} />
      </div>
    </section>
  );
}
