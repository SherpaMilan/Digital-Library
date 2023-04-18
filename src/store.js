import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./pages/signup-signin/userSlice";
import bookReducer from "./pages/books/bookSlice";
import burrowReducer from "./pages/burrow-history/burrowSlice";

import systemReducer from "./system/systemSlice";
export default configureStore({
  reducer: {
    user: userReducer,
    book: bookReducer,
    burrow: burrowReducer,
    system: systemReducer,
  },
});
