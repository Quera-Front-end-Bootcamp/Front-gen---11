import authReducer from "./auth";
import entitiesReducer from "./entities";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    auth: authReducer,
    entities: entitiesReducer,
  },
});
