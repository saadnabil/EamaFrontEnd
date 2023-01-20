import { Col, Form, Input, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import style from "./footer.module.scss";
import {
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import { FiSend } from "react-icons/fi";
import { BsEnvelope } from "react-icons/bs";

export default function Footer() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <footer className={style.footer}>
        <div className="topFooter">
          <Row>
            <Col xs={24} lg={12}>
              <div className="left container_">
                <h2 className="mainHeading">WANT TO WORK WITH US?</h2>
              </div>
            </Col>
            <Col xs={24} lg={12}>
              <div className="right container_">
                <h3>CONTACT US</h3>
                <p>(+68) 120034509</p>
                <p>info@yourdomain.com</p>
                <p>
                  005 Stokes Isle Apt. 896, <br />
                  enaville 10010, USA
                </p>
              </div>
            </Col>
          </Row>
        </div>
        <div className="secondFooter container_">
          <Row gutter={20}>
            <Col xs={24} md={24} lg={7}>
              <div className="logo">
                <Link href="/">
                  <a>
                    <Image src={"/images/logo.png"} width={158} height={54} />
                  </a>
                </Link>
                <p>
                  © Copyrights 2021 Outmedia <br />
                  All rights reserved.
                </p>
              </div>
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <div className="footerUl">
                <h4 className="footerHeading">LINKS</h4>
                <ul>
                  <li>
                    <Link href="/">
                      <>
                        <span />
                        <a>Home</a>
                      </>
                    </Link>
                  </li>

                  <li>
                    <Link href="/about">
                      <a>About</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/customers">
                      <a>Customers</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/request-qutation">
                      <a>Request-qutation</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers">
                      <a>Careers</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <div className="footerUl">
                <h4 className="footerHeading">LINKS</h4>
                <ul>
                  <li>
                    <Link href="/blog">
                      <a>Blog</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact-us">
                      <a>Contact Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/bilboard">
                      <a>Bilboard</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={24} md={24} lg={5}>
              <div className="socail">
                <h4 className="footerHeading">SUBSCRIBE</h4>
                <Form
                  name="basic"
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                >
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <div className="subscribe">
                      <div className="icon1">
                        <BsEnvelope />
                      </div>
                      <Input placeholder="Email" />
                      <div className="icon2">
                        <FiSend />
                      </div>
                    </div>
                  </Form.Item>
                </Form>
                <ul className="flex_">
                  <li>
                    <Link href="/">
                      <a>
                        <GrFacebookOption />
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/">
                      <a>
                        <AiOutlineTwitter />
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/">
                      <a>
                        <AiFillYoutube />
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/">
                      <a>
                        <AiFillInstagram />
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
        <div className="bottomFooter">© 2022, Eama. All rights reserved</div>
      </footer>
    </>
  );
}
