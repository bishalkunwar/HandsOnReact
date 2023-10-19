import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import Table from "./Table";
import useSort from '../hooks/useSort';

export default function SortableTable(props){
    const {config, fruits} = props;
    const {sortBy, sortOrder, sortedData, handleClick} = useSort(fruits, config);
   
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