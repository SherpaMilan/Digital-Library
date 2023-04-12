import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  burrow: [],
};
const burrowSlice = createSlice({
  name: "burrow",
  initialState,
  reducers: {
    setBurrow: (state, { payload }) => {
      console.log(payload);
      state.burrow = payload;
    },
  },
});

const { reducer, actions } = burrowSlice;

export const { setBurrow } = actions;

export default reducer;
