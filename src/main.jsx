// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const initialPath = new URLSearchParams(window.location.search).get('redirect');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/LegalbizAi_chatbot">
      <App initialPath={initialPath} />
    </BrowserRouter>
  </React.StrictMode>,
);