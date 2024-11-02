import { createSlice } from "@reduxjs/toolkit";

const Global = createSlice({
  name: "global",
  initialState: {
    loading: false,
    curboat: {},
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setCurboat: (state, action) => {
      state.curboat = action.payload;
    },
  },
});

export const { setLoading, setCurboat } = Global.actions;
export default Global.reducer;
