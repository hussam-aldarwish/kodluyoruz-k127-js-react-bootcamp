import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: "light" };

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggle: (state) => {
      state.value = state.value === "light" ? "dark" : "light";
    },
  },
});

export const selectTheme = (state) => state.theme.value;
export const toggleTheme = themeSlice.actions.toggle;
export default themeSlice.reducer;
