import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import forumSlice from "./slices/forumSlice";
import postSlice from "./slices/postSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        forum: forumSlice,
        post: postSlice
    }
});