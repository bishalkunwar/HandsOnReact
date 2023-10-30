import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUser} from "../store";
import Button from "./Button";
import Skeleton from "./Skeleton";

export default function UserLists(){
    
    const[isLoadingUsers, setIsLoadingUsers] = useState(false);
    const[loadingUsersError, setLoadingUsersError] = useState(null);
    const[isCreatingUser, setIsCreatingUser] = useState(false);
    const[creatingUserError, setCreatingUserError] = useState(null);
    const dispatch = useDispatch();

    const{data} = useSelector((state)=>{
        return state.users;
    })

    useEffect(()=>{
        setIsLoadingUsers(true);
        dispatch(fetchUsers())
            .unwrap()
            // .then(()=>{
            //     // console.log("Success");
            //     setIsLoadingUsers(false);
            // })
            .catch((err)=>
                // console.log("Fail");
                setLoadingUsersError(err)
            ).finally(()=>
                setIsLoadingUsers(false) // finally is gonna get called anyway so we can remove the then function.
            );

    }, [dispatch]);

    const handleAddUser = () => {
        setIsCreatingUser(true);
        dispatch(addUser())
            .unwrap()
            // .then(())
            .catch((error)=>setCreatingUserError(error))
            .finally(()=>setIsCreatingUser(false));
    };

    if(isLoadingUsers){
        return <Skeleton times={6} className="h-10 w-full"/>
    };

    if(loadingUsersError){
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
                {
                    isCreatingUser 
                    ? 'Creating User' 
                    : <Button onClick={handleAddUser}>+ Add User</Button>
                }
                {creatingUserError && 'Error Creating User'}
            </div>
            <div>{renderedUsers}</div>
        </div>
    );
};