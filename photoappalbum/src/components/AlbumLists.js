import { useFetchAlbumsQuery, useAddAlbumMutation, useDeleteAlbumMutation } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import AlbumListItem from "./AlbumListItems";

export default function AlbumList({user}){
    
    const {data, error, isFetching} = useFetchAlbumsQuery(user);
    const[addAlbum, results] = useAddAlbumMutation();
    useFetchAlbumsQuery(user);
    const [deleteAlbum, deleteAlbumResult] = useDeleteAlbumMutation();
    const handleAddAlbums = () => {
        addAlbum(user);
    };

    let content;

    if(isFetching){
        content=<Skeleton times={3} className="h-10 w-full"/>
    }else if(error){
        content=<div>Error Loading Albums</div>
    }else{
        content = data.map(album=>{
            return <AlbumListItem key={album.id} album={album} />;

            // const header = <div>{album.title}</div>;

            // return <ExpandablePanel key={album.id} header={header}>
            //     Lists of photos in the album
            // </ExpandablePanel>
        })
    }

    return(
        <div>
            <div className="m-2 flex flex-row items-center justify-between">
                <h3 className="text-lg font-bold">albums for {user.name}</h3>
                <Button onClick={handleAddAlbums} loading={results.isLoading}>+ Add Album</Button>
            </div>
            <div>
                {content}
            </div>
        </div>
    );
};