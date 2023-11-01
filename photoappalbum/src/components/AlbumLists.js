import { useFetchAlbumsQuery } from "../store";

export default function AlbumList({user}){
    
    const {data, error, loading} = useFetchAlbumsQuery(user);
    console.log(data, error, loading);

    return(
        <div>
            albums for {user.name}
        </div>
    );
};