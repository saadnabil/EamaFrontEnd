import { Col, Row } from "antd";
import {
  BsFillHouseDoorFill,
  BsInstagram,
  BsTelephoneFill,
} from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { useSelector } from "react-redux";
import Link from "next/link";

export const ContactInfo_section = () => {
  const { contact } = useSelector(({ contact }) => contact);

  return (
    <div className="contactInfo container_">
      <Row gutter={20}>
        <Col xs={24} lg={12}>
          <div className="infoCard card1">
            <h3>Contact info</h3>
            <ul>
              {contact.contact?.map((item) => (
                <li key={item.id}>
                  {item.type === "phone" ? (
                    <BsTelephoneFill />
                  ) : item.type === "mobile" ? (
                    <BsTelephoneFill />
                  ) : item.type === "email" ? (
                    <MdEmail />
                  ) : item.type === "address" ? (
                    <BsFillHouseDoorFill />
                  ) : (
                    ""
                  )}
                  {item.value}
                </li>
              ))}
            </ul>
          </div>
        </Col>
        <Col xs={24} lg={12}>
          <div className="infoCard card2">
            <h3>stay connected</h3>
            {/* <p>{contact.contact_section?.description}</p> */}
            <ul className="social">
              {contact.socialmedia?.map((item) => (
                <li key={item.id}>
                  <Link href={item.link}>
                    <a>
                      {item.type === "facebook" ? (
                        <span className="facebook">
                          <FaFacebookF />
                        </span>
                      ) : item.type === "twitter" ? (
                        <span className="twitter">
                          <AiOutlineTwitter />
                        </span>
                      ) : item.type === "youtube" ? (
                        <span className="youtube">
                          <FaYoutube />
                        </span>
                      ) : item.type === "instagram" ? (
                        <span className="instagram">
                          <BsInstagram />
                        </span>
                      ) : item.type === "linkedin" ? (
                        <span className="linkedin">
                          <FaLinkedinIn />
                        </span>
                      ) : (
                        ""
                      )}
                      {item.type}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Col>
        <Col xs={24} lg={24}>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1725.758605374272!2d31.3681992!3d30.1080103!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145817790485a9eb%3A0x3132a0695aac763!2sEama%20advertising!5e0!3m2!1sen!2seg!4v1675020329420!5m2!1sen!2seg"
              width="100%"
              height="250"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Col>
      </Row>
    </div>
  );
};
