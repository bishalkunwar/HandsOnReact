import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/UserSlices";
import { setupListeners } from "@reduxjs/toolkit/query";
import { albumsApi } from "./apis/albumApi";

export const store = configureStore({
    reducer: {
        users: userReducer,
        [albumsApi.reducerPath]: albumsApi.reducer
    },
    middleware: (getDefaultMiddleware)=> {
        return getDefaultMiddleware().concat(albumsApi.middleware);
    }
});

setupListeners(store.dispatch);

export * from './thunk/fetchUsers';
export * from './thunk/addUser';
export * from './thunk/deleteUser';
export {useFetchAlbumsQuery} from './apis/albumApi';