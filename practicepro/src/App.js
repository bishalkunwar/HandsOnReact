// import { useState } from "react";
// import BookCreate from "./Components/fileHandlingWithContext/BookCreate";
import Main from "./Components/fileHandlingWithContext/Main";

function App(){
  // const[books, setBooks] = useState('');

  // const createBook = (title) => {
  //   console.log("Need to create a boobs: ", title);
  // }
  return(
    <Main/>
  );
};

export default App;










// import {useState} from 'react';
// import SearchBar from "./Components/CarSearchApp.js/SearchBar";
// import searchImages from "./api";
// import CarLists from "./Components/CarSearchApp.js/CarList";

// function App() {
  
//   const[images, setImages] = useState([]);

//   const handleSubmit=async(term)=>{
//     const responded = await searchImages(term);
//     setImages(responded);
//   };

//   return (
//     <div className="App">
//         <SearchBar onSubmit={handleSubmit} />
//         <CarLists data = {images}/>
//     </div>
//   );
// }

// export default App;
