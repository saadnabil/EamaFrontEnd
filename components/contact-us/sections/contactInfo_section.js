import { Col, Row } from "antd";
import { BsInstagram, BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiFillClockCircle, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { useSelector } from "react-redux";
import Link from "next/link";

export const ContactInfo_section = () => {
  const { contact } = useSelector(({ contact }) => contact);

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
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
                  ) : item.type === "" ? (
                    <AiFillClockCircle />
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
            <p>{contact.contact_section?.description}</p>
            <ul className="social">
              {contact.socialmedia?.map((item) => (
                <li key={item.id}>
                  <Link href={item.link}>
                    <a>
                      {item.type === "facebook" ? (
                        <FaFacebookF />
                      ) : item.type === "twitter" ? (
                        <AiOutlineTwitter />
                      ) : item.type === "youtube" ? (
                        <FaYoutube />
                      ) : item.type === "Instagram" ? (
                        <BsInstagram />
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
        {/* <Col xs={24} lg={8}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          ></GoogleMapReact>
        </Col> */}
      </Row>
    </div>
  );
};
