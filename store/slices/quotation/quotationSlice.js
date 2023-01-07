import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  loading: false,
  apiErrors: [],
  customers: {},
};

export const getQuotationPage = createAsyncThunk(
  "quotation/getQuotationPage",
  async (_, { rejectWithValue }) => {
    try {
      const data = await axios.get("/quotation-page");

      return data.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const quotationFormThunk = createAsyncThunk(
  "quotation/quotationFormThunk",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await axios.post("/quotation", payload);

      return data.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const getQuotationSlice = createSlice({
  name: "quotation",
  initialState,
  reducers: {},
  extraReducers: {
    [getQuotationPage.pending]: (state) => {
      state.loading = true;
    },

    [getQuotationPage.fulfilled]: (state, action) => {
      state.quotation = action?.payload.data;
      state.loading = false;
    },

    [HYDRATE]: (state, action) => {
      if (action.payload?.index?.quotation) {
        state.quotation = action.payload;
      }
    },
  },
});

export default getQuotationSlice.reducer;
