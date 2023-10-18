import Table from "../Table/Table";

export default function TablePage(){
    
    const fruits = [
        {name: 'Mango', color: 'bg-yellow-500', score:10},
        {name: 'Banana', color: 'bg-yellow-900', score:9},
        {name: 'Apple', color: 'bg-red-500', score:8},
        {name: 'Cherry', color: 'bg-red-800', score:7},
        {name: 'Pineapple', color: 'bg-yellow-100', score:6},
    ];
    
    return(
        <div>
            <Table fruits={fruits}/>
        </div>
        
    );
};