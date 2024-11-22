import { createSlice } from "@reduxjs/toolkit";

const Global = createSlice({
  name: "global",
  initialState: {
    loading: false,
    curboat: {},
    mode: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setCurboat: (state, action) => {
      state.curboat = action.payload;
    },
    setMode: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const { setLoading, setCurboat, setMode } = Global.actions;
export default Global.reducer;
