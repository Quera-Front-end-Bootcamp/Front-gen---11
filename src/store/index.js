import authReducer from "./auth";
import { configureStore } from "@reduxjs/toolkit";
import courseSlice from "./course";

export default configureStore({
  reducer: {
    auth: authReducer,
    course: courseSlice,
  },
});
