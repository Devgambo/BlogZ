import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";


const store = configureStore({
    reducer: {                                  //This structure supports multiple reducers in the store
        auth : authSlice,
         //TODO: add more slices here for posts
    }
});

export default store;