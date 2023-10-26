import {useDispatch, useSelector } from "react-redux/";
import { removeDog } from "../store";

export default function DogLists(){

    const dispatch = useDispatch();

    const {dogs, name} = useSelector(({form, dogs: {data, searchTerm}})=>{
        const filteredDogs = data.filter((dog)=>
            dog.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        return{
            dogs: filteredDogs,
            name: form.name
        }
    })

    const handleDogDelete = (dog) => {
        dispatch(removeDog(dog.id));
    };

    const renderedDogs = dogs.map((dog)=>{
        const bold = name && dog.name.toLowerCase().includes(name.toLowerCase());

        return(
            <div key={dog.id} className={`panel ${bold&&'bold'}`}>
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