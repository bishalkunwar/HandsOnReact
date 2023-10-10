import BookShow from "./BookShow";

function BookList({books, onDelete}){
    const renderedBooks = books.map((book)=>{
        console.log(book.title);
        return <BookShow key={book.id} book={book} onDelete={onDelete}/>
    });

    return(
        <div className="book-list">{renderedBooks}</div>
    );
};

export default BookList;