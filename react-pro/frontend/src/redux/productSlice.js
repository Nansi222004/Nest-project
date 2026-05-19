// features/products/productSlice.js

import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

/**
 * 🔹 Async thunk for API call
 */
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("https://dummyjson.com/products");

      // Return only product array
      return response.data.products;
    } catch (error) {
      // Better error handling
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch products"
      );
    }
  }
);

/**
 * 🔹 Initial State
 */
const initialState = {
  data: [],
  loading: false,
  error: null,
};

/**
 * 🔹 Slice
 */
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      // 👉 When API call starts
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null; // reset error
      })

      // 👉 When API call succeeds
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })

      // 👉 When API call fails
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;