import {GoTrash} from "react-icons/go";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import {useDeleteAlbumMutation} from "../store";
import PhotoLists from "./PhotoLists";

export default function AlbumListItem({album}){
    const[deleteAlbum] = useDeleteAlbumMutation();
    
    const handleAlbumDelete = () => {
        deleteAlbum(album);
    };

    const header = (<div><Button onClick={handleAlbumDelete}><GoTrash/></Button>{album.title}</div>);

    return (
        <ExpandablePanel key={album.id} header={header}>
            <PhotoLists />
        </ExpandablePanel>
)};