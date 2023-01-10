import "@styles/first.scss";
import "antd/dist/antd.css";
import "swiper/css";
import "swiper/css/navigation";
import "@styles/sections.scss";
import "@styles/globals.scss";

import LayoutApp from "../layout/layout";
import { wrapper } from "../store/store";
import { CookiesProvider } from "react-cookie";
import SetApp from "../settings/setApp";

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
