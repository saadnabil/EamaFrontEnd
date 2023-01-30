import { Drawer } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
const Menue = () => {
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <div className="menuPage">
        <div className="menuPageBtn" onClick={showDrawer}>
          <HiMenuAlt1 />
        </div>
        <Drawer
          placement={"right"}
          closable={false}
          onClose={onClose}
          visible={visible}
          key={"right"}
          className={"menuPageDrawer"}
        >
          <div className="menuPageHeader" onClick={onClose}>
            <HiMenuAlt1 />
          </div>

          <div className="content">
            <ul>
              <li
                className={router.pathname === "/" ? "active" : ""}
                onClick={onClose}
              >
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li
                className={router.pathname === "/about" ? "active" : ""}
                onClick={onClose}
              >
                <Link href="/about">
                  <a>Why Eama</a>
                </Link>
              </li>
              <li
                className={router.pathname === "/customers" ? "active" : ""}
                onClick={onClose}
              >
                <Link href="/customers">
                  <a>Our Clients</a>
                </Link>
              </li>
              <li
                className={
                  router.pathname === "/request-qutation" ? "active" : ""
                }
                onClick={onClose}
              >
                <Link href="/request-qutation">
                  <a>Request Quotation</a>
                </Link>
              </li>

              <li
                className={router.pathname === "/careers" ? "active" : ""}
                onClick={onClose}
              >
                <Link href="/careers">
                  <a>Careers</a>
                </Link>
              </li>

              <li
                className={router.pathname.includes("/blog") ? "active" : ""}
                onClick={onClose}
              >
                <Link href="/blog">
                  <a>Our Blog</a>
                </Link>
              </li>
              <li
                className={router.pathname === "/news" ? "active" : ""}
                onClick={onClose}
              >
                <Link href="/news">
                  <a>News</a>
                </Link>
              </li>
              <li
                className={
                  router.pathname.includes("/bilboard") ? "active" : ""
                }
                onClick={onClose}
              >
                <Link href="/bilboard">
                  <a>Our Locations</a>
                </Link>
              </li>

              <li
                className={
                  router.pathname.includes("/previous-compains") ? "active" : ""
                }
                onClick={onClose}
              >
                <Link href="/previous-compains">
                  <a>Previous Campaign</a>
                </Link>
              </li>
              <li
                className={router.pathname === "/contact-us" ? "active" : ""}
                onClick={onClose}
              >
                <Link href="/contact-us">
                  <a>Contact Us</a>
                </Link>
              </li>
            </ul>
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default Menue;
