import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchResults = createAsyncThunk(
  "search/fetchResults",
  async (query, { rejectWithValue }) => {
    try {
      const res = await axios.get("http://localhost:4000/api/generate", {
        params: { query },
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.error || "Something went wrong"
      );
    }
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: {
    results: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearResults: (state) => {
      state.results = null;
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchResults.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.results = null;
      })
      .addCase(fetchResults.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload;
      })
      .addCase(fetchResults.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearResults } = searchSlice.actions;
export default searchSlice.reducer;
