import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  loading: false,
  apiErrors: [],
  about: {},
};

export const getAboutPage = createAsyncThunk(
  "about/getAboutPage",
  async (_, { rejectWithValue }) => {
    try {
      const data = await axios.get("/about-page");

      return data.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {},
  extraReducers: {
    [getAboutPage.pending]: (state) => {
      state.loading = true;
    },

    [getAboutPage.fulfilled]: (state, action) => {
      state.about = action?.payload?.data;
      state.loading = false;
    },

    [getAboutPage.rejected]: (state, action) => {
      state.apiErrors = "";
      state.loading = false;
    },

    [HYDRATE]: (state, action) => {
      state.about = action.payload.about.about;
      if (action?.payload?.about?.about) {
      }
    },
  },
});

export default aboutSlice.reducer;
