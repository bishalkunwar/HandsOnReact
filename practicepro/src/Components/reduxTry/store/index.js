import {configureStore, createSlice} from '@reduxjs/toolkit';

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

        }
    },
});

const store = configureStore({
    reducer: {
        songs: songsSlice.reducer
    }
});

export {store};
export const {addSong, removeSong} = songsSlice.actions;

// const startingState = store.getState();
// console.log(JSON.stringify(startingState));

// store.dispatch(songsSlice.actions.addSong("new song"));

// const finalState = store.getState();
// console.log(JSON.stringify(finalState));  


