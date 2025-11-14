import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import noteReducer from "./noteSlice";

export const store = configureStore({
  reducer: combineReducers({
    user: userReducer,
    note: noteReducer,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: process.env.NODE_ENV !== "production",
});
