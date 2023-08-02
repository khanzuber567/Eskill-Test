import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../User/userSlice";

const store = configureStore({
  reducer: {
    auth:authReducer,
  },
});

export default store;