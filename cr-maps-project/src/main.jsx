import React from 'react';
import ReactDOM from 'react-dom/client'; // Use `react-dom/client` for React 18
import App from './App'; // Import the main `App` component
import './index.css'; // Import global styles


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
