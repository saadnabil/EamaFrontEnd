import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  loading: false,
  apiErrors: [],
  bilboard: {},
};

export const getBilboardPage = createAsyncThunk(
  "bilboard/getBilboardPage",
  async (_, { rejectWithValue }) => {
    try {
      const data = await axios.get("/billboard-page");

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
      state.blog = action?.payload.data;
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
