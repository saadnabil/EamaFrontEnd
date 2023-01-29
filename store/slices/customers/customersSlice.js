import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  loading: false,
  apiErrors: [],
  customers: {},
};

export const getCustomersPage = createAsyncThunk(
  "customers/getCustomersPage",
  async (_, { rejectWithValue }) => {
    try {
      const data = await axios.get("/client-page");

      return data.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const aboutSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {},
  extraReducers: {
    [getCustomersPage.pending]: (state) => {
      state.loading = true;
    },

    [getCustomersPage.fulfilled]: (state, action) => {
      state.customers = action?.payload.data;
      state.loading = false;
    },

    [HYDRATE]: (state, action) => {
      state.customers = action.payload.customers.customers;
    },
  },
});

export default aboutSlice.reducer;
