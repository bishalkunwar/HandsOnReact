import {cofigureStore} from "@reduxjs/toolkit";
import { userReducer } from "./slices/UserSlices";

export const store = cofigureStore({
    reducer: {
        users: userReducer,
    },
});

