import {GoTrash} from "react-icons/go";
import Button from "./Button";
import { deleteUser } from "../store";
import useThunk from "../hooks/use-thunk";
import ExpandablePanel from "./ExpandablePanel";
import { Fragment } from "react";

export default function UserListItem({user}){

    const[doDeleteUser, isLoadingToDelete, errorWhileDeleting] = useThunk(deleteUser);
    
    const handleDeleteClick = () => {
        doDeleteUser(user);
    } 

    const header = <>
            <Button className="mr-3" loading={isLoadingToDelete} onClick={handleDeleteClick}>
                <GoTrash/>
            </Button>
            
            {errorWhileDeleting&& <div>Error Deleting User...</div> }
            {user.name}
        </>
    
    return(
        <ExpandablePanel header={header}>CONTENT</ExpandablePanel>
    );
};