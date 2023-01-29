import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  loading: false,
  apiErrors: [],
  blog: {},
  singleBlog: {},
};

export const getBlogPage = createAsyncThunk(
  "blog/getBlogPage",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await axios.get(`/blog-page?page=${payload}`);

      return data.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const getSingleBlogThunk = createAsyncThunk(
  "blog/getSingleBlogThunk",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await axios.get(`/blog/${payload}`);

      return data.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const glogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: {
    [getBlogPage.pending]: (state) => {
      state.loading = true;
    },

    [getBlogPage.fulfilled]: (state, action) => {
      state.blog = action?.payload.data;
      state.loading = false;
    },

    [getSingleBlogThunk.pending]: (state) => {
      state.loading = true;
    },

    [getSingleBlogThunk.fulfilled]: (state, action) => {
      state.singleBlog = action?.payload.data;
      state.loading = false;
    },

    [HYDRATE]: (state, action) => {
      state.blog = action.payload.blog.blog;
      state.singleBlog = action.payload.blog.singleBlog;
    },
  },
});

export default glogSlice.reducer;
