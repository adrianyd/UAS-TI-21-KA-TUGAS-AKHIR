import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GenreSelectionPage from './GenreSelectionPage';
import PopPage from './components/PopPage';
import RockPage from './components/RockPage';
import MetalPage from './components/MetalPage';
import HardcorePage from './components/HardcorePage';
import HomePage from './components/HomePage';
import Login from './components/Login';
import SignUp from './components/SignUp';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/GenreSelectionPage" element={<GenreSelectionPage />} />
        <Route path="/PopPage" element={<PopPage />} />
        <Route path="/RockPage" element={<RockPage />} />
        <Route path="/MetalPage" element={<MetalPage />} />
        <Route path="/HardcorePage" element={<HardcorePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};


export default App;
