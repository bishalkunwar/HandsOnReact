
import {configureStore} from '@reduxjs/toolkit';
import { dogReducer, addDog, removeDog, changeSearchTerm } from './slices/dogSlice';
import { formReducer, changeName, changeCost } from './slices/formSlice';

const store = configureStore({
    reducer: {
        dogs: dogReducer,
        form: formReducer
    }
});  

export {
    store, changeName, changeCost, addDog, removeDog, changeSearchTerm
}