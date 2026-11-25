import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles.css';

// In production, #root already holds pre-rendered HTML (see scripts/prerender.js) for
// search engines. createRoot replaces it with the live app rather than hydrating, which
// avoids mismatch issues with the scroll/animation state the page sets up on load.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
