import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Pages/Home'; 
import ThingsToDo from './Pages/ThingsToDo';
import Recommendations from './Pages/Recommendations';
import Tips from './Pages/Tips';
import Food from './Pages/Food';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/things-to-do" element={<ThingsToDo />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/food" element={<Food />} />
      </Routes>
    </Router>
  );
}

export default App;