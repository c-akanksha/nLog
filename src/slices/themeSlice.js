import { createSlice } from "@reduxjs/toolkit";
import { lightTheme, darkTheme } from "../utils/themes";

const initialState = {
  theme: lightTheme,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload === "light" ? lightTheme : darkTheme;
    },
  },
});

const { setTheme } = themeSlice.actions;

export { setTheme };
export default themeSlice.reducer;
