import { configureStore } from "@reduxjs/toolkit";
import devToolsEnhancer from "redux-devtools-expo-dev-plugin";

import Slices from "./Slice";
import Global from "./Global";
import BasicBoat from "./BasicBoat";

export const store = configureStore({
  reducer: {
    Slice: Slices,
    Global: Global,
    BasicBoat: BasicBoat,
  },
  devTools: true, // Enable dev tools only in development
  enhancers: [devToolsEnhancer()],
});
