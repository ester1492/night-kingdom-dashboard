import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MatehNetzivut from './components/MatehNetzivut';
import Machoz from './components/Machoz';
import Bisar from './components/Bisar';
import Soher from './components/Soher';
import './styles.css'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MatehNetzivut />} />
        <Route path="/Machoz" element={<Machoz />} />
        <Route path="/Bisar" element={<Bisar />} />
        <Route path="/Soher" element={<Soher />} />
      </Routes>
    </Router>
  );
};

export default App;