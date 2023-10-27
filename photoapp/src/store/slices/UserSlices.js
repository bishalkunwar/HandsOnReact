
import { createSlice } from "@reduxjs/toolkit";

const userSlices = createSlice({
    name: "users",
    initialState: {
        data: []
    },
    reducers: {

    },

});

export const userReducer = userSlices.reducer;