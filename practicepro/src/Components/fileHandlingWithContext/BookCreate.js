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
            <br/><br/><br/>
            <form onSubmit = {handleSubmit}>
                <label>Title: </label><br/>
                <input value={title} onChange={handleChange}/><br/>
                <button>Create.!</button>
            </form>
        </div>
    );
};