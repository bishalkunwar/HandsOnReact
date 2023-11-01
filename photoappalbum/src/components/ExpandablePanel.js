import { useState } from "react";
import {GoChevronDown, GoChevronLeft} from "react-icons/go";

export default function ExpandablePanel({header, children}){
    const[expanded, setExpanded] = useState(false);
    
    const handleExpandAndColease = () => {
        setExpanded(!expanded);
    }
    
    return(
        <div className="mb-2 border rounded">
            <div className="flex p-2 justify-between items-center">
                <div className="flex flex-row items-center justify-between">
                    {header}
                </div>
                <div className="cursor-pointer" onClick={handleExpandAndColease}>
                    {expanded ? <GoChevronDown/>:<GoChevronLeft/>}
                </div>
            </div>
            <div onClick={handleExpandAndColease}>
               {expanded && <div className="p-2 border-t"> {children} </div>}
            </div>
        </div>
    );
};