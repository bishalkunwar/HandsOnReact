import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/UserSlices";

export const store = configureStore({
    reducer: {
        users: userReducer,
    },
});

export * from './thunk/fetchUsers';
export * from './thunk/addUser';