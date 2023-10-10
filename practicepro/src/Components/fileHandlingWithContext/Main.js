import {useState} from 'react';
import BookCreate from './BookCreate';
import BookList from './BookList';

export default function Main(){
    const[books, setBooks] = useState([]);
    
    const deleteBookById = (id)=>{
        const updatedBooks = books.filter((book)=>{
            return book.id !== id;
        });

        setBooks(updatedBooks);
    };

    const createBook =(title) => {
        const updatedBooks = [...books, {id: Math.round(Math.random()*9999), title}];
        setBooks(updatedBooks);
    };
    
    return(
        <div className='main'>
            <BookList books={books} onDelete={deleteBookById}/>
            <BookCreate onCreate={createBook}/>  
        </div>
    );
};