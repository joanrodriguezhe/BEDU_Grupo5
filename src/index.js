import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css'


import App from './App';
import reportWebVitals from './reportWebVitals';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';

//Pendiente agregar .env const NODE_ENV = 'development';
const NODE_ENV = false;

ReactDOM.render(
  <BrowserRouter basename={`${NODE_ENV ? '/' : '/BEDU_Grupo5'}`}>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
