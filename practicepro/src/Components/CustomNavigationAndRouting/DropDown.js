import { useState, useEffect, useRef } from "react"
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

export default function DropDown({options, value, onChange}){
    const[expand, setExpand] = useState(false);
    const divEl = useRef();


    useEffect(()=>{
        const handler = (event)=>{
            if(!divEl.current.contains(event.target)){
                setExpand(false); 
            }
        };
       document.addEventListener('click', handler, true); 

       return () =>{
        document.removeEventListener('click', handler);
       }
    })

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
        <div  ref={divEl} className="w-48 relative">
            <Panel className="flex justify-between items-center cursor-pointer" onClick={()=>handleClik(expand)}>{value?.label || 'Select...'} <GoChevronDown className="text-lg"/></Panel>
            {expand && <Panel className="absolute top-full ">{renderedItems}</Panel>}
        </div>
    )
};



