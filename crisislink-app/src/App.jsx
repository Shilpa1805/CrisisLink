import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CrisisSignup from './components/CrisisSignup';
import CrisisLogin from './components/CrisisLogin';

function App() {
  return (
     <Router>
      <Routes>
        <Route path="/" element={<CrisisLogin />} />
        <Route path="/signup" element={<CrisisSignup />} /> 
      </Routes>
    </Router>
  );
}

export default App;
