// import Table from "../Table/Table";
import SortableTable from "../Table/SortableTable";

export default function TablePage(){
    
    const fruits = [
        {name: 'Mango', color: 'bg-yellow-500', score:10},
        {name: 'Banana', color: 'bg-yellow-900', score:9},
        {name: 'Apple', color: 'bg-red-500', score:8},
        {name: 'Cherry', color: 'bg-red-800', score:7},
        {name: 'Pineapple', color: 'bg-yellow-100', score:6},
    ];

    const config = [
        {label: "Name", render: (fruit)=> fruit.name, sortValue: (fruit)=>fruit.name},
        {label: "Color", render: (fruit)=> <div className={`p-3 m-2 ${fruit.color}`}/>},
        {label: "Score", render: (fruit)=> fruit.score, sortValue: (fruit)=> fruit.score},
    ];

    const keyFn = (fruit) => {
        return fruit.name;
    };
    
    return(
        <div>
            <SortableTable fruits={fruits} config={config} keyFn={keyFn}/>
        </div>
        
    );
};