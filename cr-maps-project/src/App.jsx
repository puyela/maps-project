import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Map from './components/Map';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home route will handle both the Home, About, and Contact sections */}
        <Route path="/" element={<Home />} />
        {/* Separate route for Map */}
        <Route path="/map" element={<Map />} />
      </Routes>
    </Router>
  );
}

export default App;
