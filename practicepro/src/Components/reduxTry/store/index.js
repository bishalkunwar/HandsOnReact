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

        }, 

        resetSong(state, action){
            return [];
        }
    },
});

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

        resetMovie(state, action){
            return [];
        }
    }
})

const store = configureStore({
    reducer: {
        songs: songsSlice.reducer,
        movies: moviesSlice.reducer
    }
});

export {store};
export const {addSong, removeSong, resetSong} = songsSlice.actions;
export const {addMovie, removeMovie, resetMovie} = moviesSlice.actions;

// const startingState = store.getState();
// console.log(JSON.stringify(startingState));

// store.dispatch(songsSlice.actions.addSong("new song"));

// const finalState = store.getState();
// console.log(JSON.stringify(finalState));  


