import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import blogsReducer from "./slices/blog.slice";

const store = configureStore({
  reducer: {
    user: userReducer,
    blogs: blogsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
