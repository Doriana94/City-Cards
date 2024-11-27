import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterSlice";
import { citiesReducer } from "./citiesSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    cities: citiesReducer,
  },
});

export default store;
