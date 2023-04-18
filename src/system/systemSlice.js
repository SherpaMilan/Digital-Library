import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal: false,
};
const systemSlice = createSlice({
  name: "system",
  initialState,
  reducers: {
    setModal: (state, { payload }) => {
      state.showModal = payload;
    },
  },
});

const { reducer, actions } = systemSlice;

export const { setModal } = actions;

export default reducer;
