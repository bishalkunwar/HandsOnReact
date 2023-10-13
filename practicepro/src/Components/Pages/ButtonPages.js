import Button from '../CustomNavigationAndRouting/Button';
import {GoBell} from 'react-icons/go';

export default function ButtonPages(){

    const handleClick = ()=>{
        alert("button clicked,")
    }

    return(
        <div>
            <Button primary rounded outline onClick={handleClick} ><GoBell/> Click me</Button>
            <Button secondary rounded outline>Click me</Button>
            <Button success rounded outline>Click me</Button><br/><br/>
            <Button warning rounded outline>Click me</Button><br/><br/>
            <Button danger rounded outline>Click me</Button><br/><br/>
        </div>
        
    );
};