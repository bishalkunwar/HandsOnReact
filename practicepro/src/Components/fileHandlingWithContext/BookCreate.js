import { useState } from "react";

export default function BookCreate({onCreate}){
    const[title, setTitle] = useState('');

    const handleChange = (e) => {
        setTitle(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreate(title);
        setTitle('');
    };

    return(
        <div>
            <form onSubmit = {handleSubmit}>
                <label>Give me a Title: </label>
                <input value={title} onChange={handleChange}/>
                <button>Create.!</button>
            </form>
        </div>
    );
};