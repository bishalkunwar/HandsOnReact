import Button from "./Button";
import {GoBell} from 'react-icons/go';
export default function Home(){

    const handleClick = ()=>{
        alert("button clicked,")
    }

    const handleMouse = ()=>{
        alert("hi");
    };
    return(
        <div>
            <Button primary rounded outline onClick={handleClick}><GoBell/> Click me</Button><br/><br/>
            <Button secondary rounded outline>Click me</Button><br/><br/>
            <Button success rounded outline>Click me</Button><br/><br/>
            <Button warning rounded outline>Click me</Button><br/><br/>
            <Button danger rounded outline>Click me</Button><br/><br/>
        </div>
        
    );
};