import { useState, useContext } from "react";
import BooksContext from "../../context/books";

export default function BookCreate({onCreate}){
    const[title, setTitle] = useState('');
    const{createBook} = useContext(BooksContext);

    const handleChange = (e) => {
        setTitle(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createBook(title);
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