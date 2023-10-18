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

    const actionBar = (
        <div>
            <Button onClick={handleClose} primary>I Accept</Button>
        </div>
    );

    const message = (
        <p>You will have to accept our aggrement.</p>
    );

    return(
        <div className="relative">
            <Button primary onClick={handleClick}>Open Model</Button>
            {showModel && <Modal onClose={handleClose} actionBar={actionBar} children={message}/>}
        </div>
    );
};