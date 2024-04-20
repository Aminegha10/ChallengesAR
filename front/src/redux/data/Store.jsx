// store.js
import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/postsSlice";
import userReducer from "../features/userSlice";
// import commentsReducer from "./commentsSlice";
// import uiReducer from "./uiSlice";

const store = configureStore({
  reducer: {
    posts: postsReducer,
    user: userReducer,
    // comments: commentsReducer,
    // ui: uiReducer,
  },
});
export default store;
