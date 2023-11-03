import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeleton from "./Skeleton";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";

export default function AlbumList({user}){
    
    const {data, error, isLoading} = useFetchAlbumsQuery(user);
    const[addAlbum, results] = useAddAlbumMutation();
    useFetchAlbumsQuery(user);
    const handleAddAlbums = () => {
        addAlbum(user);
    };

    let content;

    if(isLoading){
        content=<Skeleton times={3}/>
    }else if(error){
        content=<div>Error Loading Albums</div>
    }else{
        content = data.map(album=>{
            const header = <div>{album.title}</div>;

            return <ExpandablePanel key={album.id} header={header}>
                Lists of photos in the album
            </ExpandablePanel>
        })
    }

    return(
        <div>
            <div>
                albums for {user.name}
                <Button onClick={handleAddAlbums}>+ Add Album</Button>
            </div>
            <div>
                {content}
            </div>
        </div>
    );
};