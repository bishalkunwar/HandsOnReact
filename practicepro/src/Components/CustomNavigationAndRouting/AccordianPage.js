// import Accordion from "../CustomNavigationAndRouting/Accordion";
import DropDown from './DropDown';

export default function AccordionPage(){
    const options = [
        {label: 'Red', value: 'Red'},
        {label: 'Blue', value: 'Blue'},
        {label: 'Green', value: 'Green'},
        {label: 'Dark', value: 'Dark'},
    ];

    return <DropDown options={options}/>;
 
}