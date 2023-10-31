import {GoTrash} from "react-icons/go";
import Button from "./Button";
import { deleteUser } from "../store";
import useThunk from "../hooks/use-thunk";

export default function UserListItem({user}){

    const[doDeleteUser, isLoadingToDelete, errorWhileDeleting] = useThunk(deleteUser);
    
    const handleDeleteClick = () => {
        doDeleteUser(user);
    } 
    
    return(
        <div key={user.id} className="mb-2 border rounded">
            <div className="flex p-2 justify-between items-center cursor-pointer">
                <div className="flex flex-row items-center justify-between">
                    <Button className="mr-3" loading={isLoadingToDelete} onClick={handleDeleteClick}>
                        <GoTrash/>
                    </Button>
                    
                    {errorWhileDeleting&& <div>Error Deleting User...</div> }
                    {user.name}
                </div>
            </div>
        </div>
    );
};