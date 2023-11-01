 import createApi, { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const albumsApi = createApi({
   reducerPath: 'album', 
   baseQuery: fetchBaseQuery({
      baseUrl: 'http://localhost:3005/',
   }),

   endpoints(builder){
      return{
         fetchAlbums: builder.query({
            query: (user)=>{
               return{
                  url: '/albums',
                  params: {
                     userId: user.id
                  }, 
                  method: 'GET'
               };
            }
         })
      }
   }
});

albumsApi.useFetchAlbumsQuery();