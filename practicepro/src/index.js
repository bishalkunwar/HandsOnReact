import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import { Provider } from './context/books';
// import searchImages from './api';
// import { NavigationProvider } from './context/navigationContext';  
// <NavigationProvider>   </NavigationProvider>

// searchImages();

import "./Components/reduxTry/store/index"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);


