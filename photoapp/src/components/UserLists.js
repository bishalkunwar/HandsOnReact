import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../store";

export default function UserLists(){
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchUsers());
    }, [dispatch]);

    return(
        <div>
            <p>User's Lists.</p>
        </div>
    );
};