import { useContext } from "react";
import BooksContext from "../../context/books";
import BookShow from "./BookShow";

function BookList({books, onDelete, onUpdate}){
    const value = useContext(BooksContext);
    const renderedBooks = books.map((book)=>{
        console.log(book.title);
        return <BookShow key={book.id} book={book} onDelete={onDelete} onUpdate={onUpdate}/>
    });

    return(
        <div className="book-list">
            {value}
            {renderedBooks}
        </div>
    );
};

export default BookList;