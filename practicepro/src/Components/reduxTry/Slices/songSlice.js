import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../store/action";

const songsSlice = createSlice({
    name: 'song', 
    initialState: [],
    reducers: {
        addSong(state, action){
            state.push(action.payload)
        },

        removeSong(state, action){
            // action.payload === string, the song that we want to delete.
            const indexToDelete = state.indexOf(action.payload);
            state.splice(indexToDelete, 1);

        }, 
    },

    extraReducers(builder){
        builder.addCase(reset, (state, action)=> {
            return [];
        })
    }
});

export const {addSong, removeSong} = songsSlice.actions;
export const songReducer = songsSlice.reducer;