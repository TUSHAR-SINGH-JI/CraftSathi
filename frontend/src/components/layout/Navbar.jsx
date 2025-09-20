import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-10 p-4">
      <nav className="max-w-7xl mx-auto flex justify-between items-center bg-white/30 backdrop-blur-sm p-3 rounded-xl shadow-md">
        <Link to="/" className="text-2xl font-bold font-display text-brand-text">
          CraftSathi
        </Link>
        <Link 
          to="/auth" 
          className="px-5 py-2 bg-brand-primary text-white font-semibold rounded-lg shadow-md hover:bg-brand-primary-hover transition-colors"
        >
          Sign In / Register
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;

