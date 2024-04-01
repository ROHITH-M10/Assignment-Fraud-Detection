import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Signin from './pages/Signin.jsx';
import Register from './pages/Register.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Signin />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;