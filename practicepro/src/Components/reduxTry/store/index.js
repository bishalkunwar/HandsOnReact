import {configureStore} from '@reduxjs/toolkit';
import { songReducer, addSong, removeSong } from '../Slices/songSlice';
import { movieReducer, addMovie, removeMovie } from '../Slices/movieSlice';
import { reset } from './action';


const store = configureStore({
    reducer: {
        songs: songReducer,
        movies: movieReducer
    }
});

export {store, reset, addMovie, removeMovie, addSong, removeSong};


// const startingState = store.getState();
// console.log(JSON.stringify(startingState));

// store.dispatch(songsSlice.actions.addSong("new song"));

// const finalState = store.getState();
// console.log(JSON.stringify(finalState));  







// const songsSlice = createSlice({
//     name: 'song', 
//     initialState: [],
//     reducers: {
//         addSong(state, action){
//             state.push(action.payload)
//         },

//         removeSong(state, action){
//             // action.payload === string, the song that we want to delete.
//             const indexToDelete = state.indexOf(action.payload);
//             state.splice(indexToDelete, 1);

//         }, 
//     },

//     extraReducers(builder){
//         builder.addCase(reset, (state, action)=> {
//             return [];
//         })
//     }
// });

// const moviesSlice = createSlice({
//     name: "movie",
//     initialState: [],
//     reducers: {
//         addMovie(state, action){
//             state.push(action.payload)
//         },

//         removeMovie(state, action){ 
//             state.splice(state.indexOf(action.payload, 1));
//         }, 

//         // resetMovie(state, action){
//         //     return [];
//         // }
//     },

//     extraReducers(builder){
//         builder.addCase(reset, (state, action)=>{
//             return [];
//         });
//     }
// });