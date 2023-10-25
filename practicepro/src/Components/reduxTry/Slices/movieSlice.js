import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../store/action";

const moviesSlice = createSlice({
    name: "movie",
    initialState: [],
    reducers: {
        addMovie(state, action){
            state.push(action.payload)
        },

        removeMovie(state, action){ 
            state.splice(state.indexOf(action.payload, 1));
        }, 

        // resetMovie(state, action){
        //     return [];
        // }
    },

    extraReducers(builder){
        builder.addCase(reset, (state, action)=>{
            return [];
        });
    }
});

export const {addMovie, removeMovie} = moviesSlice.actions;
export const movieReducer = moviesSlice.reducer;