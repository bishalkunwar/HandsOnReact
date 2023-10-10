
export default function BookShow({book, onDelete}){

    const handleDelete = () =>{
        onDelete(book.id);
    };

    return(
        <div className="book-show">
            {/* <p>{book.id}</p><br/> */}
            <p>{book.title}</p><br/>
            <button className="delete" onClick={handleDelete}>
                Delete
            </button>

        </div>
    );
};