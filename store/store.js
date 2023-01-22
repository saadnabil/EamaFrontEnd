import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import aboutSlice from "./slices/about/aboutSlice";
//
import authSlice from "./slices/auth/authSlice";
import bilboardSlice from "./slices/bilboard/bilboardSlice";
import blogSlice from "./slices/blog/blogSlice";
import careersSlice from "./slices/careers/careersSlice";
import contactSlice from "./slices/contact/contactSlice";
import customersSlice from "./slices/customers/customersSlice";
import indexSlice from "./slices/index/indexSlice";
import getLayoutSlice from "./slices/layout/getLayoutSlice";
import getNewsSlice from "./slices/news/news";
import previousCompainsSlice from "./slices/previousCompains/previousCompains";
import quotationSlice from "./slices/quotation/quotationSlice";

const makeStore = () =>
  configureStore({
    reducer: {
      auth: authSlice,
      index: indexSlice,
      about: aboutSlice,
      customers: customersSlice,
      quotation: quotationSlice,
      careers: careersSlice,
      blog: blogSlice,
      contact: contactSlice,
      bilboard: bilboardSlice,
      news: getNewsSlice,
      previousCompains: previousCompainsSlice,
      layout: getLayoutSlice,
    },
    devTools: true,
  });
export const wrapper = createWrapper(makeStore);
