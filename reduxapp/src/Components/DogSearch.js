import { useDispatch, useSelector } from "react-redux";
import {changeSearchTerm} from "../store";

export default function DogSearch(){
    const dispatch = useDispatch();
    const searchTerm = useSelector((state)=>{
       return state.dogs.searchTerm 
    });

    const handleSearchTermChange = (event) => {
        dispatch(changeSearchTerm(event.target.value));
    }
    
    return(
        <div className="list-header">
            <h3 className="title is-3">My Car</h3>
            <div className="search field is-horizontal">
                <label className="label">Searcg</label>
                <input className="input" value={searchTerm} onChange={handleSearchTermChange}/>
            </div>
        </div>
    );
};