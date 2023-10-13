import { useState } from "react";

export default function Accordion({items}){

    const[expandedIndex, setExpandedIndex] = useState(0);

    // this function and function called into the jsx is the combination of shorthand and longhand function.
    const handleClick = (itemIndex)=>{
        setExpandedIndex(itemIndex);
    }

    const renderedItems = items.map((item, index)=>{
        const isExpanded = index===expandedIndex;
        const content = isExpanded&&<div>{item.content}</div>

        const icon = <span>{isExpanded?'Down':'Left'}</span>

       return(
        <div key={item.id}>
            <div onClick={()=>handleClick(index)}>{item.label}  {icon}</div>
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