import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  loading: false,
  apiErrors: [],
  bilboard: {},
  singleBilboard: {},
};

export const getBilboardPage = createAsyncThunk(
  "bilboard/getBilboardPage",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await axios.get(`/billboard-page?page=${payload}`);

      return data.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const getSingleBilboard = createAsyncThunk(
  "bilboard/getSingleBilboard",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await axios.get(`/billboard/${payload}`);

      return data.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const bilboardSlice = createSlice({
  name: "bilboard",
  initialState,
  reducers: {},
  extraReducers: {
    [getBilboardPage.pending]: (state) => {
      state.loading = true;
    },

    [getBilboardPage.fulfilled]: (state, action) => {
      state.bilboard = action?.payload.data;
      state.loading = false;
    },

    [getSingleBilboard.pending]: (state) => {
      state.loading = true;
    },

    [getSingleBilboard.fulfilled]: (state, action) => {
      state.singleBilboard = action?.payload.data;
      state.loading = false;
    },
    [HYDRATE]: (state, action) => {
      if (action.payload?.index?.blog) {
        state.blog = action.payload;
      }
    },
  },
});

export default bilboardSlice.reducer;
