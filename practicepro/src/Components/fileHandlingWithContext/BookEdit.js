import { useState, useContext } from "react";
import BooksContext from "../../context/books";

export default function BookEdit({book, onSubmit}){
    const[title, setTitle] = useState(book.title);
    const {updateBookById} = useContext(BooksContext)
    
    const handleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        onSubmit();
        updateBookById(book.id, title);
    };

    return(
        <form className="book-edit" onSubmit={handleSubmit}>
             <label>Title</label><br/>
             <input className="input" value={title} onChange={handleChange}/><br/>
             <button className="button is-primary">Save</button>
        </form>
    );
};