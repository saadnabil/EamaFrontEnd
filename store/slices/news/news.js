import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  loading: false,
  apiErrors: [],
  news: {},
};

export const getNewsPage = createAsyncThunk(
  "news/getNewsPage",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await axios.get(`/news-page?page=${payload}`);

      return data.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const getNewsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: {
    [getNewsPage.pending]: (state) => {
      state.loading = true;
    },

    [getNewsPage.fulfilled]: (state, action) => {
      state.news = action?.payload.data;
      state.loading = false;
    },
  },
});

export default getNewsSlice.reducer;
