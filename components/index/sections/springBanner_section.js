import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Fade } from "react-reveal";

export const SpringBanner_section = () => {
  const { index } = useSelector(({ index }) => index);

  const bilboardSection = index.billboard_section;

  return (
    <div className="springBannerSection container_">
      <Fade left>
        <div className="top">{bilboardSection?.title}</div>
      </Fade>
      <div className="center">
        {bilboardSection?.image && (
          <Image
            src={bilboardSection?.image}
            layout="fill"
            alt="Spring Banner"
          />
        )}
      </div>
      <Fade right>
        <div className="bottom">
          <h4>{bilboardSection?.subtitle}</h4>
          <p>{bilboardSection?.descrition}</p>
          {bilboardSection?.button_link && (
            <Link href={bilboardSection?.button_link}>
              <div className="icon">
                <BsArrowRight />
              </div>
            </Link>
          )}
        </div>
      </Fade>
    </div>
  );
};
