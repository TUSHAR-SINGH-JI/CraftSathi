import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar.jsx';

const WelcomePage = () => {
  return (
    <div className="min-h-screen bg-brand-bg flex flex-col items-center justify-center relative p-4">
      <Navbar />
      <main className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold font-display text-brand-text leading-tight">
          Bring Your Craft
          <br />
          <span className="text-brand-primary">to the World</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
          CraftSathi is your AI-powered companion. Turn a single photo of your art into a complete social media campaign with stunning images, captivating captions, and a promotional video.
        </p>
        <Link 
          to="/auth" 
          className="mt-10 inline-block px-8 py-4 bg-brand-primary text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-brand-primary-hover transition-transform transform hover:scale-105"
        >
          Get Started Now
        </Link>
      </main>
      <footer className="absolute bottom-4 text-gray-500 text-sm">
        CraftSathi | 2025
      </footer>
    </div>
  );
};

export default WelcomePage;