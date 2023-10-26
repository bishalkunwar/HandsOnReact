import {useDispatch, useSelector } from "react-redux/";
import { removeDog } from "../store";

export default function DogLists(){

    const dispatch = useDispatch();

    const dogs = useSelector(({dogs: {data, searchTerm}})=>{
        return data.filter((dog)=>
            dog.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
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