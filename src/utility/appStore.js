import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import movieSliceReducer from "./movieSlice"
import aiSliceReducer from "./aiSlice"
const appStore = configureStore({
  reducer: {
    user: userSliceReducer,
    movie : movieSliceReducer,
    aiRecommendation : aiSliceReducer,
  },
});
export default appStore;
