import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  apiErrors: [],
  footer: {},
};

export const getLayoutFooter = createAsyncThunk(
  "layout/getLayoutFooter",
  async (_, { rejectWithValue }) => {
    try {
      const data = await axios.get("/footer-page");

      return data.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const footerSubscripeThunk = createAsyncThunk(
  "careers/careerFormThunk",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await axios.post("/subscription", payload);

      return data.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const getLayoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {},
  extraReducers: {
    [getLayoutFooter.pending]: (state) => {
      state.loading = true;
    },

    [getLayoutFooter.fulfilled]: (state, action) => {
      state.footer = action?.payload.data.footer_section;
      state.loading = false;
    },
  },
});

export default getLayoutSlice.reducer;
