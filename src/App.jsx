// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home'; // Assuming Home.jsx is in the same directory
import AddBook from './AddBook'; // Assuming AddBook.jsx is in the same directory

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddBook />} />
      </Routes>
    </Router>
  );
};

export default App;