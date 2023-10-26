import {createSlice, nanoid} from "@reduxjs/toolkit";

const dogSlice = createSlice({
    name: 'dogs',
    initialState: {
        searchTerm: '',
        dogs: []
    },

    reducers: {
        changeSearchTerm(state, action){
            state.searchTerm = action.payload;
        },
        addDog(state, action){
            state.dogs.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid(),
            });
        },
        removeDog(state, action){
            const dogToDelete = state.dogs.filter((dog)=> {
                return dog.id !== action.payload;
            });

            state.dogs = dogToDelete;
        },
        
    },
});


export const {changeSearchTerm, addDog, removeDog} = dogSlice.actions;
export const dogReducer = dogSlice.reducer;

