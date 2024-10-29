import { createSlice } from "@reduxjs/toolkit";

const Global = createSlice({
  name: "global",
  initialState: {
    loading: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = Global.actions;
export default Global.reducer;
