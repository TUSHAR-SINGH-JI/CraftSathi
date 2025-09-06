import React from 'react';
import Login from "../src/component/auth/login";
import Register from "../src/component/auth/register";
import Header from "../src/component/header";
import Home from "../src/component/home";
// import { AuthProvider } from "../src/context/authcontext";
import { AuthProvider } from "../src/context/authcontext";
import { useRoutes } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <AuthProvider>
        {/* <Header /> */}
        <div className="w-full h-screen flex flex-col">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<Login />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;