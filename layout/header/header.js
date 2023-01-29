import style from "./style/header.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Menue from "./sections/menu";

function HeaderApp() {
  const router = useRouter();
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  });

  return (
    <>
      <header className={style.headerPages}>
        <div className={`container_` + (scroll ? " headerS2" : "")}>
          <div className="header_center flex__">
            <div className="header_sec1 flex__">
              <div className="logo">
                <Link href="/">
                  <a>
                    <Image src={"/images/logo.png"} width={128} height={54} />
                  </a>
                </Link>
              </div>
            </div>
            <Menue />
            <ul className="flex__ header_sec2">
              <li className={router.pathname === "/" ? "active" : ""}>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li className={router.pathname === "/about" ? "active" : ""}>
                <Link href="/about">
                  <a>Why Eama</a>
                </Link>
              </li>
              <li className={router.pathname === "/customers" ? "active" : ""}>
                <Link href="/customers">
                  <a>Our Clients</a>
                </Link>
              </li>
              <li
                className={
                  router.pathname === "/request-qutation" ? "active" : ""
                }
              >
                <Link href="/request-qutation">
                  <a>Request Qutation</a>
                </Link>
              </li>

              <li className={router.pathname === "/careers" ? "active" : ""}>
                <Link href="/careers">
                  <a>Careers</a>
                </Link>
              </li>

              <li className={router.pathname.includes("/blog") ? "active" : ""}>
                <Link href="/blog">
                  <a>Our Blog</a>
                </Link>
              </li>
              <li className={router.pathname === "/news" ? "active" : ""}>
                <Link href="/news">
                  <a>News</a>
                </Link>
              </li>
              <li
                className={
                  router.pathname.includes("/previous-compains") ? "active" : ""
                }
              >
                <Link href="/previous-compains">
                  <a>Previous Campaign</a>
                </Link>
              </li>
              <li
                className={
                  router.pathname.includes("/bilboard") ? "active" : ""
                }
              >
                <Link href="/bilboard">
                  <a>Our Locations</a>
                </Link>
              </li>

              <li className={router.pathname === "/contact-us" ? "active" : ""}>
                <Link href="/contact-us">
                  <a>Contact Us</a>
                </Link>
              </li>
            </ul>
            {/* <ul className="flex_ social">
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
            </ul> */}
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderApp;
