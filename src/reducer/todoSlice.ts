import { createSlice } from "@reduxjs/toolkit";
import { getCars, getCarById } from "../reducer/api";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    cars: [],
    loading: false,
    car: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCars.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCars.fulfilled, (state, action) => {
        state.loading = false;
        state.cars = action.payload;
      })
      .addCase(getCars.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getCarById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCarById.fulfilled, (state, action) => {
        state.loading = false;
        state.car = action.payload;
      });
  },
});

export default carsSlice.reducer;
