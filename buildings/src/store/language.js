import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: 0,
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage(state) {
      state.language = state.language === 0 ? 1 : 0;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export const languageReducer = languageSlice.reducer;
export default languageSlice;
