import { createSlice } from "@reduxjs/toolkit";

const Global = createSlice({
  name: "global",
  initialState: {
    loading: false,
    curboat: {}, 
    curhost : {}, 
    curbooking : {},
    curcity : "",
    mode: false, 
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
    },
    setCurcity : (state, action) =>{
      state.curcity = action.payload
    }
  },
});

export const { setLoading, setCurboat, setCurhost,setMode, setBooking, setCurcity } = Global.actions;
export default Global.reducer;
