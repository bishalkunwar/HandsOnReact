 import {createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {faker} from "@faker-js/faker";

const albumsApi = createApi({
   reducerPath: 'album', 
   baseQuery: fetchBaseQuery({
      baseUrl: 'http://localhost:3005/',
   }),

   endpoints(builder){
      return{
         fetchAlbums: builder.query({
            providesTags: ['albums'],
            query: (user)=>{
               return{
                  url: '/albums',
                  params: {
                     userId: user.id
                  }, 
                  method: 'GET'
               };
            }
         }),

         addAlbum: builder.mutation({
            invalidatesTags: ['albums'],
            query: (user)=>{
               return{
                  url: '/albums',
                  method: 'POST',
                  body: {
                     userId: user.id,
                     title: faker.commerce.productName(),                }
               }
            }
         })
      }
   }
});

export const {useFetchAlbumsQuery, useAddAlbumMutation} = albumsApi;
export {albumsApi};
// albumsApi.useFetchAlbumsQuery();