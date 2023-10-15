import { useState } from "react"
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

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
            <div className="hover:bg-sky-100 rounded cursor-pointer p-1 " onClick={()=>handleOptionClick(option)} key={option.value}>
                {option.label}
            </div>
        )
    })


    return(
        <div className="w-48 relative">
            <Panel className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-gray-300 w-full" onClick={()=>handleClik(expand)}>{value?.label || 'Select...'} <GoChevronDown className="text-2xl"/></Panel>
            {expand && <Panel className="absolute top-full border rounded p-3 shadow bg-white w-full">{renderedItems}</Panel>}
        </div>
    )
};



