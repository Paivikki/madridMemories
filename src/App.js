import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Pages/Home';
import ThingsToDo from './Pages/ThingsToDo';
import Recommendations from './Pages/Recommendations';
import Tips from './Pages/Tips';
import Food from './Pages/Food';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

const customColor = {
  main: '#10579E',
  light: '#42a5f5',
  dark: '#1565c0',
  contrastText: '#fff',
};


const theme = createTheme({
  palette: {
    primary: customColor,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>

  );
}

export default App;