import {useDispatch, useSelector } from "react-redux/";
import { removeDog } from "../store";

export default function DogLists(){

    const dispatch = useDispatch();

    const dogs = useSelector((state)=>{
        return state.dogs.data;
    })

    const handleDogDelete = (dog) => {
        dispatch(removeDog(dog.id));
    };

    const renderedDogs = dogs.map((dog)=>{
        return(
            <div key={dog.id} className="panel">
                <p>
                    {dog.name} - ${dog.cost}
                </p>
                <button className="button is-danger" onClick={()=>handleDogDelete(dog)}>
                    Delete
                </button>
            </div>
        )
    });


    return(
        <div className="dog-list">
            {renderedDogs}
            <hr/>
        </div>
    );
};