import {createSlice, nanoid} from "@reduxjs/toolkit";

const dogSlice = createSlice({
    name: 'dogs',
    initialState: {
        searchTerm: '',
        data: []
    },

    reducers: {
        changeSearchTerm(state, action){
            state.searchTerm = action.payload;
        },
        addDog(state, action){
            state.data.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid(),
            });
        },
        removeDog(state, action){
            const dogToDelete = state.data.filter((dog)=> {
                return dog.id !== action.payload;
            });

            state.data = dogToDelete;
        },
        
    },
});


export const {changeSearchTerm, addDog, removeDog} = dogSlice.actions;
export const dogReducer = dogSlice.reducer;

