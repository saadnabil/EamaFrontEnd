import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  loading: false,
  apiErrors: [],
  index: {},
};

export const getIndexPage = createAsyncThunk(
  "index/getIndexPage",
  async (_, { rejectWithValue }) => {
    try {
      const data = await axios.get("/home-page");

      return data.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const indexSlice = createSlice({
  name: "index",
  initialState,
  reducers: {},
  extraReducers: {
    [getIndexPage.pending]: (state) => {
      state.loading = true;
    },

    [getIndexPage.fulfilled]: (state, action) => {
      state.index = action?.payload.data;
      state.loading = false;
    },

    [getIndexPage.rejected]: (state, action) => {
      // state.index = action;
    },

    [HYDRATE]: (state, action) => {
      state.index = action.payload.index.index;
    },
  },
});

export default indexSlice.reducer;
