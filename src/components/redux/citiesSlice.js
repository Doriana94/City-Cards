import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: JSON.parse(localStorage.getItem("cities")) || [],
};

const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {
    add: (state, action) => {
      state.value.push(action.payload);
    },
    remove: (state, action) => {
      state.value = state.value.filter((city) => city.id !== action.payload);
    },
    reset: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { add, remove, reset } = citiesSlice.actions;
export const citiesReducer = citiesSlice.reducer;
