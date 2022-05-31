import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "./videoSlice";

const store = configureStore({
  reducer: videoReducer,
});

export default store;
