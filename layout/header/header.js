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
                    <Image src={"/images/logo.png"} width={158} height={54} />
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
                  <a>About</a>
                </Link>
              </li>
              <li className={router.pathname === "/customers" ? "active" : ""}>
                <Link href="/customers">
                  <a>customers</a>
                </Link>
              </li>
              <li
                className={
                  router.pathname === "/request-qutation" ? "active" : ""
                }
              >
                <Link href="/request-qutation">
                  <a>request qutation</a>
                </Link>
              </li>

              <li className={router.pathname === "/careers" ? "active" : ""}>
                <Link href="/careers">
                  <a>careers</a>
                </Link>
              </li>

              <li className={router.pathname.includes("/blog") ? "active" : ""}>
                <Link href="/blog">
                  <a>blog</a>
                </Link>
              </li>
              <li
                className={
                  router.pathname.includes("/bilboard") ? "active" : ""
                }
              >
                <Link href="/bilboard">
                  <a>Billboards' locations</a>
                </Link>
              </li>

              <li className={router.pathname === "/contact-us" ? "active" : ""}>
                <Link href="/contact-us">
                  <a>CONTACT</a>
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
