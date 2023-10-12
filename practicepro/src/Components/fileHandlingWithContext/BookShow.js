import { useState, useContext } from "react";
import BooksContext from "../../context/books";
import BookEdit from "./BookEdit";

export default function BookShow({book}){

    const[showEdit, setShowEdit] = useState(false);
    const {deleteBookById} = useContext(BooksContext);

    const handleDelete = () =>{
        deleteBookById(book.id);
    };

    const handleEdit = () => {
        setShowEdit(!showEdit);
    }

    const handleSubmit = () => {
        setShowEdit(false);
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