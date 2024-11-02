import { createSlice } from "@reduxjs/toolkit";

const BasicBoat = createSlice({
  name: "basicboat",
  initialState: {
    boattypes: [],
    boatbrands: [],
    enginecount: [],
    powers: [],
    bathroomcount: [],
    capacity: [],
    cabinscount: [],
  },
  reducers: {
    getalltypes: (state, action) => {
      state.boattypes = action.payload;
    },
    getallbrands: (state, action) => {
      state.boatbrands = action.payload;
    },
    getenginecount: (state, action) => {
      state.enginecount = action.payload;
    },
    getpowers: (state, action) => {
      state.powers = action.payload;
    },
    getbathroomcount: (state, action) => {
      state.bathroomcount = action.payload;
    },
    getcapacity: (state, action) => {
      state.capacity = action.payload;
    },
    getcabinscount: (state, action) => {
      state.cabinscount = action.payload;
    },
  },
});

export const {
  getalltypes,
  getallbrands,
  getenginecount,
  getpowers,
  getbathroomcount,
  getcapacity,
  getcabinscount,
} = BasicBoat.actions;
export default BasicBoat.reducer;
