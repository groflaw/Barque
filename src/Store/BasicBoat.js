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
    locationtype: [],
    accessories: [],
    allowes: [],
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
    getlocationtype: (state, action) => {
      state.locationtype = action.payload;
    },
    getaccessories: (state, action) => {
      state.accessories = action.payload;
    },
    getallowes: (state, action) => {
      state.allowes = action.payload;
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
  getlocationtype,
  getaccessories,
  getallowes,
} = BasicBoat.actions;
export default BasicBoat.reducer;
