import BookShow from "./BookShow";

function BookList({books}){
    const renderedBooks = books.map((book)=>{
        console.log(book.title);
        return <BookShow key={book.id} book={book}/>
    });

    return(
        <div className="book-list">{renderedBooks}</div>
    );
};

export default BookList;