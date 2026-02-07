import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllproducts } from "../../Api/products.Api";



export const productsAction = createAsyncThunk("products/getAll",async (page = 1, { rejectWithValue }) => {
    try {
        const result = await getAllproducts(page);
        return result.data.data;
    } catch (error) {
        return rejectWithValue(
    error.response?.data?.message || "Server failed"
    );    }
    }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(productsAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(productsAction.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(productsAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default productsSlice.reducer