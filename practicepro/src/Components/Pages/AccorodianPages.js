import Accordion from '../CustomNavigationAndRouting/Accordion';

export default function AccordionPage(){

    const items = [
        {
            id: '123',
            label: 'Ops React',
            content: 'hahahaha react is getting nice on me',
        },
        {
            id: '124',
            label: 'Ops React',
            content: 'hahahaha react is getting nice on me',
        },
        {
            id: '125',
            label: 'Ops React',
            content: 'hahahaha react is getting nice on me',
        },
        {
            id: '126',
            label: 'Ops React',
            content: 'hahahaha react is getting nice on me',
        },
    ];


    return(
        <Accordion items={items}/>
    );
};


































// import Button from './Button';
// import {GoBell} from 'react-icons/go';

// export default function ButtonPages(){

//     const handleClick = ()=>{
//         alert("button clicked,")
//     }

//     return(
//         <div>
//             <Button primary rounded outline onClick={handleClick} ><GoBell/> Click me</Button>
//             <Button secondary rounded outline>Click me</Button>
//             <Button success rounded outline>Click me</Button><br/><br/>
//             <Button warning rounded outline>Click me</Button><br/><br/>
//             <Button danger rounded outline>Click me</Button><br/><br/>
//         </div>
        
//     );
// };