import {useState} from 'react';
import BookCreate from './BookCreate';
import BookList from './BookList';

export default function Main(){
    const[books, setBooks] = useState([]);
    
    const createBook =(title) => {
        const updatedBooks = [...books, {id: Math.round(Math.random()*9999), title}];
        setBooks(updatedBooks);
    };

    const deleteBookById = (id)=>{
        const updatedBooks = books.filter((book)=>{
            return book.id !== id;
        });

        setBooks(updatedBooks);
    };

    const updateBookById = (id, newTitle) => {
        const updatedBooks = books.map((book) => {
            if(book.id===id){
                return{...book, title: newTitle}
            }
            return book;
        });

        setBooks(updatedBooks);
    };
    
    return(
        <div className='main'>
            <BookList books={books} onDelete={deleteBookById} onUpdate={updateBookById}/>
            <BookCreate onCreate={createBook}/>  
        </div>
    );
};