import axios from "axios";
import useTranslation from "next-translate/useTranslation";
import { useEffect, useMemo } from "react";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { getInfo, setCheckUser } from "@store/slices/auth/authSlice";
import { setFirstLoad } from "../store/slices/auth/authSlice";
import allUrl from "./allUrl.json";

function SetApp({ children }) {
  //
  const { t, lang } = useTranslation();
  const dispatch = useDispatch();
  const [cookies, setCookie, removeCookie] = useCookies(["SToken"]);

  // check user

  useMemo(() => {
    // set axios
    axios.defaults.baseURL = allUrl.apiUrl;
    axios.defaults.headers.common["lang"] = lang;
    axios.defaults.headers.common["domain"] = cookies.SUserDomain;
    axios.defaults.headers.common["Authorization"] = "Bearer " + cookies.SToken;
  }, []);

  useEffect(() => {
    if (cookies["SToken"]) {
      dispatch(setCheckUser(true));
    }
    dispatch(setFirstLoad(true));
  }, []);

  return children;
}

export default SetApp;
