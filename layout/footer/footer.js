import { Col, Form, Input, message, Row } from "antd";
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
import { useDispatch, useSelector } from "react-redux";
import {
  footerSubscripeThunk,
  getLayoutFooter,
} from "../../store/slices/layout/getLayoutSlice";
import { useEffect } from "react";

export default function Footer() {
  const { footer } = useSelector(({ layout }) => layout);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLayoutFooter());
  }, []);

  const onFinish = (values) => {
    dispatch(footerSubscripeThunk(values))
      .unwrap()
      .then((res) => {
        message.success("Your Subscripe have successfully");
      })
      .catch((res) => {
        message.error(res.data.message);
      });
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
                {footer.contact?.map((item) => (
                  <p key={item.id}>{item.value}</p>
                ))}
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
                  © Copyrights 2023 Eama <br />
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
                      <Input placeholder="Email" type="email" />
                      <button className="icon2" type="submit">
                        <FiSend />
                      </button>
                    </div>
                  </Form.Item>
                </Form>
                <ul className="flex_">
                  {footer.socialmedia?.map((item) => (
                    <li key={item.id}>
                      <Link href={item.link}>
                        <a>
                          {item.type === "facebook" ? (
                            <GrFacebookOption />
                          ) : item.type === "twitter" ? (
                            <AiOutlineTwitter />
                          ) : item.type === "youtube" ? (
                            <AiFillYoutube />
                          ) : item.type === "Instagram" ? (
                            <AiFillInstagram />
                          ) : (
                            ""
                          )}
                        </a>
                      </Link>
                    </li>
                  ))}
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
