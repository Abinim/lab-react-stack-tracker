import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  };

  return (
    <nav>
      <span onClick={navigateToHome}>StackTracker</span>
    </nav>
  );
};

export default Navbar;
