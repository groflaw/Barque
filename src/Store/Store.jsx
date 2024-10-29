import { configureStore } from "@reduxjs/toolkit";
import Slices from "./Slices";
import Global from "./Global";
export const store = configureStore({
  reducer: {
    Slice: Slices,
    Global: Global,
  },
});
