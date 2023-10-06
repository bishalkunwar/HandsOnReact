import "./ShowAnimals.css";  
import {useState} from 'react';

import bird from "../../images/bird.jpg";
import cat from "../../images/cat.jpg";
import cow from "../../images/cow.jpg";
import dog from "../../images/dog.jpg";
import horse from "../../images/horse.jpg";
import heart from "../../images/love.jpg";


const jpgMap = {
    bird: bird,
    cat: cat,
    cow: cow,
    dog: dog,
    horse: horse,
};

export default function ShowAnimals({type}){

    const[clicks, setClicks] = useState(0);

    const handleClick = () => {
        setClicks(clicks+1);
    }
    return(
        <div className="animal-show" onClick={handleClick}>
            <img className="animal" src={jpgMap[type]} alt="animalas"/>
            <img className="heart" src={heart} alt='heart' style={{width: 10+10*clicks +'px'}}/>
        </div>
        
    );
};