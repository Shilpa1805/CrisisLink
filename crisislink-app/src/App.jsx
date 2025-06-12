import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CrisisSignin from './components/CrisisSignin';
import CrisisLogin from './components/CrisisLogin';

function App() {
  return (
     <Router>
      <Routes>
        <Route path="/" element={<CrisisLogin />} />
        <Route path="/signin" element={<CrisisSignin />} /> 
      </Routes>
    </Router>
  );
}

export default App;
