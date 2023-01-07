import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  loading: false,
  apiErrors: [],
  careers: {},
};

export const getCareersPage = createAsyncThunk(
  "careers/getCareersPage",
  async (_, { rejectWithValue }) => {
    try {
      const data = await axios.get("/career-page");

      return data.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const careerFormThunk = createAsyncThunk(
  "careers/careerFormThunk",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await axios.post("/career", payload);

      return data.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const getCareersSlice = createSlice({
  name: "careers",
  initialState,
  reducers: {},
  extraReducers: {
    [getCareersPage.pending]: (state) => {
      state.loading = true;
    },

    [getCareersPage.fulfilled]: (state, action) => {
      state.careers = action?.payload.data;
      state.loading = false;
    },

    [HYDRATE]: (state, action) => {
      if (action.payload?.index?.careers) {
        state.careers = action.payload;
      }
    },
  },
});

export default getCareersSlice.reducer;
