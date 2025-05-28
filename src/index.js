import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // <-- aqui está o CSS do Tailwind importado
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
