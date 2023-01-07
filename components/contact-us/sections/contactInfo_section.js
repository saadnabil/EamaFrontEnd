import { Col, Row } from "antd";
import { RiMapPin2Fill } from "react-icons/ri";
import { BsInstagram, BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiFillClockCircle, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import GoogleMapReact from "google-map-react";

export const ContactInfo_section = () => {
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
        <Col xs={24} lg={8}>
          <div className="infoCard card1">
            <h3>Contact info</h3>
            <ul>
              <li>
                <RiMapPin2Fill />
                location heare
              </li>
              <li>
                <BsTelephoneFill />
                01016040298
              </li>
              <li>
                <MdEmail />
                omarahmed@gmail.com
              </li>
              <li>
                <AiFillClockCircle />
                omarahmed@gmail.com
              </li>
            </ul>
          </div>
        </Col>
        <Col xs={24} lg={8}>
          <div className="infoCard card2">
            <h3>stay connected</h3>
            <p>
              loream loream loream loream loream loream loream loream loream
              loream loream loream loream{" "}
            </p>
            <ul className="social">
              <li>
                <a href="/">
                  <FaFacebookF />
                  facebook
                </a>
              </li>
              <li>
                <a href="/">
                  <AiOutlineTwitter />
                  twitter
                </a>
              </li>
              <li>
                <a href="/">
                  <BsInstagram />
                  instagram
                </a>
              </li>
              <li>
                <a href="/">
                  <FaYoutube />
                  youtube
                </a>
              </li>
            </ul>
          </div>
        </Col>
        <Col xs={24} lg={8}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            {/* <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            /> */}
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55246.670174691506!2d31.378636800000002!3d30.0679168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145815f8139c47a3%3A0xc1744516bae86a18!2sCitystars%20Heliopolis!5e0!3m2!1sen!2seg!4v1672690637371!5m2!1sen!2seg"
              width="600"
              height="450"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe> */}
          </GoogleMapReact>
        </Col>
      </Row>
    </div>
  );
};
