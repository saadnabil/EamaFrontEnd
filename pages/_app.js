import "@styles/first.scss";
import "antd/dist/antd.css";
import "swiper/css";
import "swiper/css/navigation";
import "@styles/sections.scss";
import "@styles/globals.scss";

import LayoutApp from "../layout/layout";
import { wrapper } from "../store/store";
import SetApp from "../layout/setApp";
import { CookiesProvider } from "react-cookie";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CookiesProvider>
        <SetApp>
          <LayoutApp>
            <Component {...pageProps} />
          </LayoutApp>
        </SetApp>
      </CookiesProvider>
    </>
  );
}

// export default MyApp
export default wrapper.withRedux(MyApp);
