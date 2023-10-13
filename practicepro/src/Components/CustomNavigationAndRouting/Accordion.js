import { useState } from "react";

export default function Accordion({items}){

    const[expandedIndex, seExpandedIndex] = useStateState(0);

    const renderedItems = items.map((item, index)=>{
    const isExpanded = index===expandedIndex;
        const content = isExpanded&&<div>{item.content}</div>
    

       return(
        <div key={item.id}>
            <div>{item.label}</div>
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