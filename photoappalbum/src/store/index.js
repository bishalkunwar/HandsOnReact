import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/UserSlices";
import { setupListeners } from "@reduxjs/toolkit/query";
import { albumsApi } from "./apis/albumApi";
import { photosApi } from "./apis/photoApi";

export const store = configureStore({
    reducer: {
        users: userReducer,
        [albumsApi.reducerPath]: albumsApi.reducer,
        [photosApi.reducerPath]: photosApi.reducer,
    },
    middleware: (getDefaultMiddleware)=> {
        return getDefaultMiddleware()
        .concat(albumsApi.middleware)
        .concat(photosApi.middleware);
    },
});

setupListeners(store.dispatch);

export * from './thunk/fetchUsers';
export * from './thunk/addUser';
export * from './thunk/deleteUser';
export {useFetchAlbumsQuery, useAddAlbumMutation, useDeleteAlbumMutation} from './apis/albumApi';
export {useFetchPhotosQuery, useAddPhotoMutation, useRemovePhotoMutation} from './apis/photoApi';