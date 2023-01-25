import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  loading: false,
  apiErrors: [],
  previousCompains: {},
  singlePreviousCompains: {},
};

export const getPreviousCompainsPage = createAsyncThunk(
  "previousCompains/getPreviousCompainsPage",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await axios.get("/campaign-page");

      return data.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const getSinglePreviousCompainsThunk = createAsyncThunk(
  "previousCompains/getSinglePreviousCompainsThunk",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await axios.get(`/campaign/${payload}`);

      return data.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const previousCompainsSlice = createSlice({
  name: "previousCompains",
  initialState,
  reducers: {},
  extraReducers: {
    [getPreviousCompainsPage.pending]: (state) => {
      state.loading = true;
    },

    [getPreviousCompainsPage.fulfilled]: (state, action) => {
      state.previousCompains = action?.payload.data;
      state.loading = false;
    },

    [getSinglePreviousCompainsThunk.pending]: (state) => {
      state.loading = true;
    },

    [getSinglePreviousCompainsThunk.fulfilled]: (state, action) => {
      state.singlePreviousCompains = action?.payload.data;
      state.loading = false;
    },
  },
});

export default previousCompainsSlice.reducer;
