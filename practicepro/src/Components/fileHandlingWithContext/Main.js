// import axios from 'axios';
import {useEffect, useContext} from 'react';
import BookCreate from './BookCreate';
import BookList from './BookList';
import BooksContext from '../../context/books';

export default function Main(){
    const {stableFetchBooks} = useContext(BooksContext);

    useEffect(()=>{
        stableFetchBooks();
    }, [stableFetchBooks]);

    
    return(
        <div className='main'>
            <BookList />
            <BookCreate />  
        </div>
    );
};