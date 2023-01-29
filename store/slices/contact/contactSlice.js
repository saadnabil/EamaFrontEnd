import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  loading: false,
  apiErrors: [],
  contact: {},
};

export const getContactPage = createAsyncThunk(
  "contact/getContactPage",
  async (_, { rejectWithValue }) => {
    try {
      const data = await axios.get("/contact-page");

      return data.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const contactFormThunk = createAsyncThunk(
  "contact/contactFormThunk",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await axios.post("/contact", payload);

      return data.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
  extraReducers: {
    [getContactPage.pending]: (state) => {
      state.loading = true;
    },

    [getContactPage.fulfilled]: (state, action) => {
      state.contact = action?.payload.data;
      state.loading = false;
    },

    [HYDRATE]: (state, action) => {
      state.contact = action.payload.contact.contact;
    },
  },
});

export default contactSlice.reducer;
