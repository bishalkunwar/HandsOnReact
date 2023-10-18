import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import Table from "./Table";

export default function SortableTable(props){
    
    const[sortOrder, setSortOrder] = useState(null);
    const[sortBy, setSortBy] = useState(null);
    const {config, fruits} = props;

    const handleClick = (label) =>{
        if(sortBy && label !== sortBy){
            setSortOrder('asc');
            setSortBy(label);
            return;
        }

        if(sortOrder === null){
            setSortOrder('asc');
            setSortBy(label);
        }else if(sortOrder === 'asc'){
            setSortOrder('desc');
            setSortBy(label);
        }else if(sortOrder === 'desc'){
            setSortOrder(null);
            setSortBy(null);
        }
    };

    const updatedConfig = config.map((column)=>{
        if(!column.sortValue){
            return column;
        }
        return{
            ...column,
            header: ()=>(
                <th className="cursor-pointer hover:bg-gray-100" onClick={()=>handleClick(column.label)}>
                    <div className="flex items-center">
                        {getIcons(column.label, sortBy, sortOrder)}
                        {column.label}
                    </div>
                </th>
            )
        }
    })

    let sortedData = fruits;
    if(sortOrder && sortBy){
        const {sortValue} = config.find(column => column.label === sortBy);
        sortedData = [...fruits].sort((a,b)=>{
            const valueA = sortValue(a);
            const valueB = sortValue(b);

            const reverseOrder = sortOrder === 'asc'? 1:-1;

            if(typeof valueA === 'string'){
                return(valueA.localeCompare(valueB))*reverseOrder;
            }else{
                return (valueA - valueB) * reverseOrder;
            }
        });
    }
    
    return(
        <div>
            <Table {...props  } config={updatedConfig} fruits={sortedData}/>;
        </div>
    );  

};



function getIcons(label, sortBy, sortOrder){
    if(label !== sortBy){
        return(
            <div>
                <IoIosArrowUp/>
                <IoIosArrowDown/>
            </div>
        );
    }
    if(sortOrder === null){
        return(
            <div>
                <IoIosArrowUp/>
                <IoIosArrowDown/>
            </div>
        );
    }else if(sortOrder === 'asc'){
        return <IoIosArrowUp/>;
    }else if(sortOrder === 'desc'){
        return <IoIosArrowDown/>;
    }
}