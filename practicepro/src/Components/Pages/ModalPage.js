import Modal from "../CustomNavigationAndRouting/Modal";
import Button from "../CustomNavigationAndRouting/Button";
import { useState } from "react";

export default function ModalPage(){
    const[showModel, setShowModel] = useState(false);

    const handleClick=()=>{
        setShowModel(true);
    }

    const handleClose = ()=>{
        setShowModel(false);
    };

    return(

        <div className="relative">
            <Button primary onClick={handleClick}>Open Model</Button>
            {showModel && <Modal onClose={handleClose}/>}
        </div>
    );
};