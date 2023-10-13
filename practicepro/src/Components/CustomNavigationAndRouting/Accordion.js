import { useState } from "react";

export default function Accordion({items}){

    const[expandedIndex, setExpandedIndex] = useState(0);

    const renderedItems = items.map((item, index)=>{
        const isExpanded = index===expandedIndex;
        const content = isExpanded&&<div>{item.content}</div>
        
        const handleClick = ()=>{
            setExpandedIndex(index)
        }

       return(
        <div key={item.id}>
            <div onClick={handleClick}>{item.label}</div>
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