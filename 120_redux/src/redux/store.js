import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterslice.js";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
