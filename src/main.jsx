// import ReactDOM from 'react-dom/client'
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

import React from 'react';
import App from './App.jsx';
import './index.css';

import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) si usas TypeScript
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
