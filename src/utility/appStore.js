import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import movieSliceReducer from "./movieSlice"
import aiSliceReducer from "./aiSlice"
import languageReducer from "./languageSlice";
const appStore = configureStore({
  reducer: {
    user: userSliceReducer,
    movie : movieSliceReducer,
    aiRecommendation : aiSliceReducer,
    configlang : languageReducer,
  },
});
export default appStore;
