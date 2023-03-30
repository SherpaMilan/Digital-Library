import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
  response: {},
  isLoading: false,
};
const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true;
    },
    requestSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.response = payload;
    },
    getBooksSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.books = payload;
    },
  },
});
const { reducer, actions } = bookSlice;

export const { requestPending, requestSuccess, getBooksSuccess } = actions;

export default reducer;
