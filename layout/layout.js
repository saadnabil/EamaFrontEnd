import Head from "next/head";
import { ConfigProvider } from "antd";
import HeaderApp from "./header/header";
import Footer from "./footer/footer";
import useTranslation from "next-translate/useTranslation";

function LayoutApp({ children }) {
  const { t, lang } = useTranslation();
  return (
    <>
      <ConfigProvider direction={lang === "ar" ? "rtl" : "ltr"}>
        <HeaderApp />
        <div className="app_">{children}</div>
        <Footer />
      </ConfigProvider>
    </>
  );
}

export default LayoutApp;
