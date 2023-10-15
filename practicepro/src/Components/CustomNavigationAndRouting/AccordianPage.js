// import Accordion from "../CustomNavigationAndRouting/Accordion";
import DropDown from './DropDown';
import { useState } from 'react';

export default function AccordionPage(){
    
    const[selection, setSelection] = useState(null);
    
    const handleSelect = (option)=>{
        setSelection(option);
    };

    const options = [
        {label: 'Red', value: 'Red'},
        {label: 'Blue', value: 'Blue'},
        {label: 'Green', value: 'Green'},
        {label: 'Dark', value: 'Dark'},
    ];

    return <DropDown options={options} value={selection} onChange={handleSelect}/>;
 
}