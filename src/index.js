// Página principal donde se renderiza la aplicación

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // Importando el componente padre
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);