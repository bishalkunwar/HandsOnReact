import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import BooksContext from './context/books';
// import searchImages from './api';

// searchImages();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BooksContext.Provider value={4}>
      <App/>
    </BooksContext.Provider>
  </React.StrictMode>
);

