import { useSelector } from "react-redux";

export default function DogValue(){

    const totalCost = useSelector(({dogs: {data, searchTerm}})=>{
        const filteredDogs = data.filter((dog)=>{
            return dog.name.toLowerCase().includes(searchTerm.toLowerCase());
        });

        // let cost = 0;
        // for(let dog of filteredDogs){
        //     cost += dog.cost
        // }

        return filteredDogs.reduce((acc, dog)=>acc+dog.cost, 0);
    })

    return(
        <div className="dog-value">
            Total Worth: ${totalCost}
        </div>
    );
};