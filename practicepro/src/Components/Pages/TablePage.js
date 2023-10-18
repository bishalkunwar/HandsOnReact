import Table from "../Table/Table";

export default function TablePage(){
    
    const fruits = [
        {name: 'Mango', color: 'Mango', score:10},
        {name: 'Banana', color: 'Banana', score:9},
        {name: 'Apple', color: 'Apple', score:8},
        {name: 'Cherry', color: 'Cherry', score:7},
        {name: 'Pineapple', color: 'Pineapple', score:6},
    ]
    
    return(
        <div>
            <Table fruits={fruits}/>
        </div>
        
    );
};