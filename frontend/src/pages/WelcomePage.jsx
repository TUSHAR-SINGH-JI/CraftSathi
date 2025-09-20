import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar.jsx';
import { Sparkles, Image, Globe } from 'lucide-react';

const WelcomePage = () => {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col relative">
      <Navbar />
      
      {/* Hero Section with Background Image */}
      <div 
        className="relative h-[80vh] flex items-center justify-center text-center p-4"
        style={{
          backgroundImage: 'url(https://placehold.co/1920x1080/EFEFEF/C7C7C7/png?text=Artisan+at+work)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-white">
          <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight animate-fade-in-up">
            Bring Your Craft to the World
            <br />
            <span className="text-brand-primary">Powered by AI</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl font-light animate-fade-in-up-delay">
            CraftSathi is your AI companion, helping artisans like you create professional marketing content from your creations.
          </p>
          <button 
            onClick={scrollToFeatures}
            className="mt-8 inline-block px-10 py-4 bg-brand-primary text-white text-lg font-semibold rounded-full shadow-lg hover:bg-brand-primary-hover transition-transform transform hover:scale-105 animate-fade-in-up-delay-2"
          >
            Get Started Now
          </button>
        </div>
      </div>

      {/* Features Section - Added an ID here */}
      <main id="features" className="py-16 md:py-24 max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold font-display text-brand-text text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Feature 1: Generate Captions */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center transition-transform transform hover:scale-105">
            <div className="text-brand-primary text-5xl mx-auto mb-4 flex items-center justify-center">
              <Sparkles size={48} />
            </div>
            <h3 className="text-2xl font-bold text-brand-text mb-2">Create Captions</h3>
            <p className="text-gray-600 mb-4">
              Upload a picture of your craft and our AI will write a perfect, heartwarming product description for you.
            </p>
            <Link to="/generate" className="text-brand-primary font-semibold hover:underline">
              Learn More
            </Link>
          </div>

          {/* Feature 2: Generate Images */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center transition-transform transform hover:scale-105">
            <div className="text-brand-primary text-5xl mx-auto mb-4 flex items-center justify-center">
              <Image size={48} />
            </div>
            <h3 className="text-2xl font-bold text-brand-text mb-2">Generate Posts</h3>
            <p className="text-gray-600 mb-4">
              Turn your imagination into stunning visuals. Just describe what you want, and the AI will create beautiful images for your social media.
            </p>
            <Link to="/photo" className="text-brand-primary font-semibold hover:underline">
              Learn More
            </Link>
          </div>
          
          {/* Feature 3: Grow Your Business */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center transition-transform transform hover:scale-105">
            <div className="text-brand-primary text-5xl mx-auto mb-4 flex items-center justify-center">
              <Globe size={48} />
            </div>
            <h3 className="text-2xl font-bold text-brand-text mb-2">Reach the World</h3>
            <p className="text-gray-600 mb-4">
              Save your creations and build a professional portfolio to show off your work to the world and attract more customers.
            </p>
            <Link to="/mystuff" className="text-brand-primary font-semibold hover:underline">
              View Portfolio
            </Link>
          </div>
          
        </div>
      </main>

      <footer className="py-8 text-center text-gray-500 bg-white shadow-inner mt-auto">
        <p>CraftSathi | 2025</p>
      </footer>
    </div>
  );
};

export default WelcomePage;