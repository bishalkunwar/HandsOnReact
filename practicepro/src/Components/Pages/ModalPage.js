import Modal from "../CustomNavigationAndRouting/Modal";
import Button from "../CustomNavigationAndRouting/Button";
import { useState } from "react";

export default function ModalPage(){
    const[showModel, setShowModel] = useState(false);

    const handleClick=()=>{
        setShowModel(true);
    }
    return(

        <div>
            <Button primary onClick={handleClick}>Open Model</Button>
            {showModel && <Modal/>}
        </div>
    );
};