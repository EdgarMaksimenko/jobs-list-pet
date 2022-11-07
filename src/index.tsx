// npm i @reduxjs/toolkit react-redux react-router-dom
// npm i --save-dev @types/react-router-dom
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <Provider store={store}>
   <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);