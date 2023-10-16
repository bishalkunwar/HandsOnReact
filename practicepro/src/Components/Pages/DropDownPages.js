// import Accordion from "../CustomNavigationAndRouting/Accordion";
import DropDown from '../CustomNavigationAndRouting/DropDown';
import { useState} from 'react';

export default function DropDownPage(){
    
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

    return( 
        <div className='flex'>
            <DropDown options={options} value={selection} onChange={handleSelect}/>;
            {/* <DropDown options={options} value={selection} onChange={handleSelect}/>; */}
        </div>
    )
}