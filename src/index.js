import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // o './tailwind.css'
import Portfolio from './Portfolio';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>
);
