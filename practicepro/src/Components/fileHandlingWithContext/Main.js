import {useState} from 'react';
import BookCreate from './BookCreate';

export default function Main(){
    const[books, setBooks] = useState('');
    
    const createBook =(title) => {
        console.log("Need to add a book with : ", title);
    };
    
    return(
        <div>
            <BookCreate onCreate={createBook}/>
        </div>
    );
};