import { useState } from "react";
import BookEdit from "./BookEdit";

export default function BookShow({book, onDelete, onUpdate}){

    const[showEdit, setShowEdit] = useState(false);
    
    const handleDelete = () =>{
        onDelete(book.id);
    };

    const handleEdit = () => {
        setShowEdit(!showEdit);
    }

    const handleSubmit = (id, newTitle) => {
        setShowEdit(false);
        onUpdate(id, newTitle);
    }

    let content = <h3>{book.title}</h3>;
    if(showEdit){
        content = <BookEdit book={book} onSubmit={handleSubmit}/>;
    };

    return(
        <div className="book-show">
            <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} height="20px" width="20px"/>
            <p>{content}</p><br/>
            <button className="edit" onClick={handleEdit}>
                Edit
            </button>
            <button className="delete" onClick={handleDelete}>
                Delete
            </button>

        </div>
    );
};