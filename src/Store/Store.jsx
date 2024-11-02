import { configureStore } from "@reduxjs/toolkit";
import Slices from "./Slice";
import Global from "./Global";
import BasicBoat from "./BasicBoat";

export const store = configureStore({
  reducer: {
    Slice: Slices,
    Global: Global,
    BasicBoat: BasicBoat,
  },
});
