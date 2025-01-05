import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home'; 
import ThingsToDo from './ThingsToDo';
import Recommendations from './Recommendations';
import Tips from './Tips';
import Food from './Food';

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