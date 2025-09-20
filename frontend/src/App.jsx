import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { auth } from './api/firebase.js';
import { onAuthStateChanged } from 'firebase/auth';

import WelcomePage from './pages/WelcomePage.jsx';
import AuthPage from './pages/AuthPage.jsx';

// A simple placeholder for your main dashboard after login
const Dashboard = () => {
  return (
    <div className="p-8 text-center bg-brand-bg min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-brand-text font-display">
        Welcome to your Dashboard!
      </h1>
      <p className="text-gray-600 mt-2">Main application content goes here. 🎨</p>
      <button 
        onClick={() => auth.signOut()}
        className="mt-8 px-6 py-2 bg-brand-primary text-white font-semibold rounded-lg shadow-md hover:bg-brand-primary-hover transition-colors"
      >
        Sign Out
      </button>
    </div>
  )
};


function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div className="flex items-center justify-center h-screen bg-brand-bg">Loading...</div>;
  }

  return (
    <Routes>
      {/* Route 1: The Welcome Page at the root URL "/" */}
      <Route path="/" element={<WelcomePage />} />

      {/* Route 2: The Authentication Page at "/auth" */}
      {/* If a user is already logged in, visiting this page will redirect them to their dashboard */}
      <Route path="/auth" element={user ? <Navigate to="/dashboard" /> : <AuthPage />} />

      {/* Route 3: The Dashboard (Protected) at "/dashboard" */}
      {/* If a user is NOT logged in, visiting this page will redirect them to the auth page */}
      {/* <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/" />} /> */}

      {/* This is a catch-all that redirects any other URL back to the welcome page */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;