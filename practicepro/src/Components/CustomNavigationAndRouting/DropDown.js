import { useState } from "react"

export default function DropDown({options, value, onChange}){
    const[expand, setExpand] = useState(false);
    
    const handleClik = (itemExpansion)=>{
        setExpand(!itemExpansion);
    };

    const handleOptionClick =(option)=>{
        setExpand(false);
        onChange(option);
    };

    // let content = "Select...";
    // if(selection){
    //     content = selection.label;   
    // };

    const renderedItems = options.map((option)=>{
        return(
            <div onClick={()=>handleOptionClick(option)} key={option.value}>
                {option.label}
            </div>
        )
    })


    return(
        <div>
            <div onClick={()=>handleClik(expand)}>{value?.label || 'Select...'}</div>
            {expand && <div>{renderedItems}</div>}
        </div>
    )
};



