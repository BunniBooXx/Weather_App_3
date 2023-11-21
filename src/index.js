import React from 'react';
import { createRoot } from 'react-dom';
import './index.css';
import App from './App';
import Navbar from './Navbar';
import Login from './Login';
import SignUp from './SignUp';
import UserProfile from './UserProfile'; // Import UserProfile component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userprofile" element={<UserProfile />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

