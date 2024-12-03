import { createSlice } from "@reduxjs/toolkit";

const Global = createSlice({
  name: "global",
  initialState: {
    loading: false,
    curboat: {}, // host select or add boat.
    curhost : {}, // user select the boat.
    curbooking : {},
    mode: false, // user or host.
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setCurboat: (state, action) => {
      state.curboat = action.payload;
    },
    setCurhost : (state, action) =>{
      state.curhost = action.payload;
    },
    setMode: (state, action) => {
      state.mode = action.payload;
    },
    setBooking : (state, action) =>{
      state.curbooking = action.payload;
    }
  },
});

export const { setLoading, setCurboat, setCurhost,setMode, setBooking } = Global.actions;
export default Global.reducer;
