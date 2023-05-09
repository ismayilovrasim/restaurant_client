import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
// import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/reset.css';
import './assets/sass/main.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <BrowserRouter>
    <App />
  // </BrowserRouter>
);


