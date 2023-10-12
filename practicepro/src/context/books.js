import axios from 'axios';
import { createContext, useState } from "react";

const BooksContext = createContext();

function Provider({children}){
    
    const[books, setBooks] = useState([]);
    
    const createBook =async(title) => {
        const response = await axios.post('http://localhost:3002/books', {title});
        const updatedBooks = [...books, response.data ]; // {id: Math.round(Math.random()*9999), title}
        setBooks(updatedBooks);
    };

    const  fetchBooks =async()=>{
        const response = await axios.get('http://localhost:3002/books');
        setBooks(response.data);
    }

    const deleteBookById = async(id)=>{
        await axios.delete(`http://localhost:3002/books/${id}`);

        const updatedBooks = books.filter((book)=>{
            return book.id !== id;
        });

        setBooks(updatedBooks);
    };

    const updateBookById = async(id, newTitle) => {
        const response = await axios.put(`http://localhost:3002/books/${id}`, {title:newTitle});
        
        const updatedBooks = books.map((book) => {
            if(book.id===id){
                return{...book, ...response.data} // title: newTitle
            }
            return book;
        });

        setBooks(updatedBooks);
    };

    const valueToShare = {books, fetchBooks, createBook, updateBookById, deleteBookById}
    console.log("from context: ", books);
    return <BooksContext.Provider value={valueToShare}>{children}</BooksContext.Provider>
};

export {Provider};
export default BooksContext;
