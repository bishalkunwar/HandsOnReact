import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import { Provider } from './context/books';
// import searchImages from './api';
// import { NavigationProvider } from './context/navigationContext';  
// <NavigationProvider>   </NavigationProvider>

// searchImages();

import {store} from "./Components/reduxTry/store/index"
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);


