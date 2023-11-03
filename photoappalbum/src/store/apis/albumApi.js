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
            providesTags: (user, result, error)=>{ // eventhough we calling result and error we wont need them here for now.
               return[{type: 'albums', id: user.id}];
            },
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
            invalidatesTags: (user, result, error)=>{
               return[{type: 'albums', id: user.id}]
            },
            query: (user)=>{
               return{
                  url: '/albums',
                  method: 'POST',
                  body: {
                     userId: user.id,
                     title: faker.commerce.productName(),                }
               }
            }
         }),

         deleteAlbun: builder.mutation({
            providesTags: ['albums'],
            query: (user)=>{
               return{
                  url: '/albums',
                  method: 'DELETE',

               }
            }
         })
      }
   }
});

export const {useFetchAlbumsQuery, useAddAlbumMutation} = albumsApi;
export {albumsApi};
// albumsApi.useFetchAlbumsQuery();