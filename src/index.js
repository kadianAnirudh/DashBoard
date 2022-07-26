import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ContextProvider } from './contexts/contextProvider.js';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ContextProvider>
      <App />
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);