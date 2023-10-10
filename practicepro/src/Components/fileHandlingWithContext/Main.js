import {useState} from 'react';
import BookCreate from './BookCreate';

export default function Main(){
    const[books, setBooks] = useState('');
    
    const createBook =(title) => {
        const updatedBooks = [...books, {id: Math.round(Math.random()*9999), title}];
        setBooks(updatedBooks);
    };
    
    return(
        <div>
            {books.length}
            <BookCreate onCreate={createBook}/>
        </div>
    );
};