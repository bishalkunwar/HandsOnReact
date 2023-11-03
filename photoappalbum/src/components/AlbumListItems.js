import {GoTrashCan} from "react-icons/go";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { useState } from "react";


export default function AlbumListItem({album}){
    const[deleting, setDeleting] = useState(false);
    
    const handleAlbumDelete = () => {
        return(

        )
    }

    const header = (<div><Button onClick={handleAlbumDelete}><GoTrashCan/></Button>{album.title}</div>);

    return (
        <ExpandablePanel key={album.id} header={header}>
            Lists of photos in the album
        </ExpandablePanel>
)};