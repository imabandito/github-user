import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: userSlice,
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>()
