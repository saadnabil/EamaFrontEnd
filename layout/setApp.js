import axios from "axios";
import useTranslation from "next-translate/useTranslation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFirstLoad } from "../store/slices/auth/authSlice";

function SetApp({ children }) {
  const { t, lang } = useTranslation();
  const dispatch = useDispatch();
  const { firstLoad } = useSelector(({ auth }) => auth);

  useEffect(() => {
    axios.defaults.headers.common["lang"] = lang;
    axios.defaults.baseURL = "https://admin.eama.site/api/v1/";
  }, []);

  useEffect(() => {
    dispatch(setFirstLoad(true));
  }, []);

  return firstLoad && children;
}

export default SetApp;
