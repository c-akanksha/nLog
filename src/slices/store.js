import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import noteReducer from "./noteSlice";
import themeReducer from "./themeSlice";

export const store = configureStore({
  reducer: combineReducers({
    user: userReducer,
    note: noteReducer,
    theme: themeReducer,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: process.env.NODE_ENV !== "production",
});
