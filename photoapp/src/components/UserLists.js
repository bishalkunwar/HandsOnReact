import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUser} from "../store";
import Button from "./Button";
import Skeleton from "./Skeleton";

export default function UserLists(){
    const dispatch = useDispatch();

    const{isLoading, data, error} = useSelector((state)=>{
        return state.users;
    })

    useEffect(()=>{
        dispatch(fetchUsers());
    }, [dispatch]);

    const handleAddUser = () => {
        dispatch(addUser);
        
    };

    if(isLoading){
        return <Skeleton times={6} className="h-10 w-full"/>
    };

    if(error){
        return <div>Error...</div>
    }

    const renderedUsers =  data.map((user)=>{
        return(
            <div key={user.id} className="mb-2 border rounded">
                <div className="flex p-2 justify-between items-center cursor-pointer">{user.name}</div>
            </div>
        );
    });

    return(
        <div>
            <div className="flex flex-row justify-between m-3">
                <h1 className="m-2 text-xl">
                    Users
                </h1>
                <Button onClick={handleAddUser}>+ Add User</Button>
            </div>
            <div>{renderedUsers}</div>
        </div>
    );
};