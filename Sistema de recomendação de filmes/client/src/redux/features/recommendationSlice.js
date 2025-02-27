import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import recommendationApi from "../../api/modules/recommendation.api";

export const fetchRecommendations = createAsyncThunk(
  "recommendations/fetchRecommendations",
  async (_, { rejectWithValue }) => {
    try {
      const { response, err } = await recommendationApi.getRecommendations();
      if (err) throw err;
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const recommendationSlice = createSlice({
  name: "recommendations",
  initialState: {
    recommendations: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecommendations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRecommendations.fulfilled, (state, action) => {
        state.loading = false;
        state.recommendations = action.payload;
      })
      .addCase(fetchRecommendations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default recommendationSlice.reducer;
