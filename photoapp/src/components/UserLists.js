import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store";
import Skeleton from "./Skeleton";

export default function UserLists(){
    const dispatch = useDispatch();

    const{isLoading, data, error} = useSelector((state)=>{
        return state.users;
    })

    useEffect(()=>{
        dispatch(fetchUsers());
    }, [dispatch]);

    if(isLoading){
        return <Skeleton times={6} className="h-10 w-full"/>
    };

    if(error){
        return <div>Error...</div>
    }

    return(
        <div>
            <p>{data.length}</p>
        </div>
    );
};