import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import aboutSlice from "./slices/about/aboutSlice";
//
import authSlice from "./slices/auth/authSlice";
import blogSlice from "./slices/blog/blogSlice";
import careersSlice from "./slices/careers/careersSlice";
import contactSlice from "./slices/contact/contactSlice";
import customersSlice from "./slices/customers/customersSlice";
import indexSlice from "./slices/index/indexSlice";
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
    },
    devTools: true,
  });
export const wrapper = createWrapper(makeStore);
