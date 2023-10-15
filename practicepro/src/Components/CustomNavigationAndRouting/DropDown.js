import { useState } from "react"

export default function DropDown({options}){
    const[expand, setExpand] = useState(false);
    
    const handleClik = (itemExpansion)=>{
        setExpand(!itemExpansion);
    };

    const handleOptionClick =(option)=>{
        setExpand(false);
        console.log(option);
    };

    const renderedItems = options.map((option)=>{
        return(
            <div onClick={()=>handleOptionClick(option)} key={option.value}>
                {option.label}
            </div>
        )
    })


    return(
        <div>
            <div onClick={()=>handleClik(expand)}>Select...</div>
            {expand && <div>{renderedItems}</div>}
        </div>
    )
};



