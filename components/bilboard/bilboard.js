import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Fade } from "react-reveal";
import { getBilboardPage } from "../../store/slices/bilboard/bilboardSlice";
import BlogCard_section from "../tools/cards/blogCard_section";
import { PageHeading_section } from "../tools/sections/pageHeading_section";

export const BilboardComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBilboardPage());
  }, []);

  const data = {
    id: 1,
    subTitle: "REAL ESTATE",
    dir: "ltr",
    title: "Luxury designer penthouse",
    description:
      "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. User generated content in real-time. Fusce rhoncus sapien ultrices, porttitor lectus id,",
    images: [
      { id: 1, url: "/photos/home/headSection/1.jpg" },
      { id: 2, url: "/photos/home/headSection/1.jpg" },
      { id: 3, url: "/photos/home/headSection/1.jpg" },
    ],
  };

  const data2 = {
    id: 1,
    subTitle: "REAL ESTATE",
    dir: "rtl",
    title: "Luxury designer penthouse",
    description:
      "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. User generated content in real-time. Fusce rhoncus sapien ultrices, porttitor lectus id,",
    images: [
      { id: 1, url: "/photos/home/headSection/1.jpg" },
      { id: 2, url: "/photos/home/headSection/1.jpg" },
      { id: 3, url: "/photos/home/headSection/1.jpg" },
    ],
  };
  return (
    <div>
      <PageHeading_section />
      <div className="container_">
        <Fade bottom>
          <BlogCard_section data={data} />
        </Fade>
        <Fade bottom>
          <BlogCard_section data={data2} />
        </Fade>
        <Fade bottom>
          <BlogCard_section data={data} />
        </Fade>
      </div>
    </div>
  );
};
