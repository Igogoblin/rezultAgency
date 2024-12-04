import { configureStore } from "@reduxjs/toolkit";
import { languageReducer } from "./language";

export const store = configureStore({
  reducer: languageReducer,
});
