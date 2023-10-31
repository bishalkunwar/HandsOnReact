import { useEffect} from "react";
import { useSelector } from "react-redux";
import { fetchUsers, addUser} from "../store";
import Button from "./Button";
import Skeleton from "./Skeleton";
import useThunk from "../hooks/use-thunk";

// below code is into the thunk hook

// function useThunk(thunk){
//     const[isLoading, setIsLoading] = useState(false);
//     const[error, setError] = useState(null);
//     const dispatch = useDispatch();

//     const runThunk = useCallback((arg)=> {
//         setIsLoading(true);
//         dispatch(thunk(arg))
//             .unwrap()
//             .catch((err)=>setError(err))
//             .finally(()=>setIsLoading(false));
//     }, [dispatch, thunk]);

//     return[runThunk, isLoading, error];

// }

export default function UserLists(){
    // const[isLoadingUsers, setIsLoadingUsers] = useState(false);
    // const[loadingUsersError, setLoadingUsersError] = useState(null);
    const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers);
    const[doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);
    // const[isCreatingUser, setIsCreatingUser] = useState(false);
    // const[creatingUserError, setCreatingUserError] = useState(null);
    // const dispatch = useDispatch();

    const{data} = useSelector((state)=>{
        return state.users;
    })

    useEffect(()=>{
        doFetchUsers();
    }, [doFetchUsers]);

    // useEffect(()=>{
    //     setIsLoadingUsers(true);
    //     dispatch(fetchUsers())
    //         .unwrap()
    //         // .then(()=>{
    //         //     // console.log("Success");
    //         //     setIsLoadingUsers(false);
    //         // })
    //         .catch((err)=>
    //             // console.log("Fail");
    //             setLoadingUsersError(err)
    //         ).finally(()=>
    //             setIsLoadingUsers(false) // finally is gonna get called anyway so we can remove the then function.
    //         );

    // }, [dispatch]);

    const handleAddUser = () => {

        doCreateUser();

        // setIsCreatingUser(true);
        // dispatch(addUser())
        //     .unwrap()
        //     // .then(())
        //     .catch((error)=>setCreatingUserError(error))
        //     .finally(()=>setIsCreatingUser(false));
    };

    let content;

    if(isLoadingUsers){
        content =  <Skeleton times={6} className="h-10 w-full"/>
    }else if(loadingUsersError){
        content =  <div>Error...</div>
    }else{
        content = data.map((user)=>{
            return(
                <div key={user.id} className="mb-2 border rounded">
                    <div className="flex p-2 justify-between items-center cursor-pointer">{user.name}</div>
                </div>
            );
        });
    }

    return(
        <div>
            <div className="flex flex-row justify-between m-3">
                <h1 className="m-2 text-xl">
                    Users
                </h1>
                <Button onClick={handleAddUser} loading={isCreatingUser}>+ Add User</Button>
                {creatingUserError && 'Error Creating User'}
            </div>
            <div>{content}</div>
        </div>
    );
};