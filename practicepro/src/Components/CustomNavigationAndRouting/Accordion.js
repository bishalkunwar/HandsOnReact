import { useState } from "react";
import {GoChevronDown, GoChevronLeft} from 'react-icons/go'
export default function Accordion({items}){

    const[expandedIndex, setExpandedIndex] = useState(-1);

    // this function and function called into the jsx is the combination of shorthand and longhand function.
    const handleClick = (itemIndex)=>{
        setExpandedIndex((currentExpandedIndex)=>{
            if(currentExpandedIndex ===itemIndex){
                return -1;
            }else{
                return itemIndex;
            }
        });
    };

    const renderedItems = items.map((item, index)=>{
        const isExpanded = index===expandedIndex;
        const content = isExpanded&&<div className="border-b p-5">{item.content}</div>

        const icon = <span className="text-2xl">{isExpanded?<GoChevronDown/>:<GoChevronLeft/>}</span>

       return(
        <div key={item.id}>
            <div className="flex p-5 bg-gray-100 border-b items-center cursor-pointer" onClick={()=>handleClick(index)}>{item.label}  {icon}</div>
            {content}
        </div>
       )
    });

    return(
        <div>
            {renderedItems}
        </div>
    );
};