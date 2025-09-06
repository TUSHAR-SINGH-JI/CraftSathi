import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authcontext';
import { doSignOut } from '../../firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube, faFeatherPointed } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();

  // Animation for the main navigation
  const navSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { tension: 120, friction: 14 }
  });

  // Animation for menu items
  const menuItemSpring = useSpring({
    from: { opacity: 0, transform: 'scale(0.9)' },
    to: { opacity: 1, transform: 'scale(1)' },
    delay: 200,
    config: { tension: 280, friction: 12 }
  });

  // Animation for the mobile menu
  const mobileMenuSpring = useSpring({
    opacity: isMenuOpen ? 1 : 0,
    transform: isMenuOpen ? 'translateY(0px)' : 'translateY(-10px)',
    config: { tension: 200, friction: 20 }
  });

  // Animation for the CraftSathi text
  const craftSathiTextSpring = useSpring({
    from: { opacity: 0, transform: 'translateX(-20px)' },
    to: async (next) => {
      await next({ opacity: 1, transform: 'translateX(0px)' });
      await new Promise(resolve => setTimeout(resolve, 2000)); // Stay visible for 2 seconds
      await next({ opacity: 0, transform: 'translateX(20px)' });
    },
    config: { tension: 120, friction: 14 },
    loop: { reverse: true, delay: 1000 } // Loop the animation
  });

  // Animation for the Craft text to move in and out of the icon
  const craftAnimation = useSpring({
    from: { transform: 'translateX(0px)', opacity: 1 },
    to: async (next) => {
      while (true) {
        // Move 'Craft' inside the icon (adjust translateX as needed)
        await next({ transform: 'translateX(-30px)', opacity: 0, config: { duration: 500 } });
        // Wait for 1 second while 'Craft' is "inside"
        await new Promise(resolve => setTimeout(resolve, 1000));
        // Move 'Craft' out of the icon
        await next({ transform: 'translateX(0px)', opacity: 1, config: { duration: 500 } });
        // Wait before looping
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    },
    loop: true,
  });

  const handleLogout = () => {
    doSignOut().then(() => {
      navigate('/login');
      setIsMenuOpen(false);
    });
  };

  return (
    <header className="relative flex 
    bg-gradient-to-b from-purple-900 via-black to-black
    justify-center items-center py-6 px-4">
      {/* 3D Glassmorphism Navigation */}
      <animated.nav 
        style={navSpring}
        className="rounded-full bg-gradient-to-r from-purple-900/70 to-purple-800/50 backdrop-blur-md border border-purple-600/30 shadow-lg shadow-purple-900/40 p-1.5"
      >
        <div className="flex items-center">
          {/* Logo */}
          <animated.div 
            style={menuItemSpring}
            className="flex-shrink-0 flex items-center ml-2 mr-6"
          >
            <FontAwesomeIcon icon={faFeatherPointed} className="text-purple-400 text-2xl mr-2" />
            <animated.span style={craftAnimation} className="text-xl font-bold text-white">CraftSathi</animated.span>
            {/* <span className="text-xl font-bold text-white">Sathi</span> */}
          </animated.div>
           
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {['Home', 'Product', 'Pricing', 'Blog', 'Company'].map((item, index) => (
              <animated.a 
                key={item}
                href="#" 
                style={{
                  opacity: menuItemSpring.opacity,
                  transform: menuItemSpring.transform,
                  delay: index * 50
                }}
                className="text-purple-200 hover:text-white hover:bg-purple-700/30 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
              >
                {item}
              </animated.a>
            ))}
          </div>
           
          {/* Auth buttons - Conditionally rendered based on authentication status */}
          <div className="hidden md:flex items-center space-x-2 ml-4">
            {userLoggedIn ? (
              <animated.button 
                style={menuItemSpring}
                onClick={handleLogout}
                className="text-purple-200 hover:text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
              >
                Logout
              </animated.button>
            ) : (
              <>
                <Link to="/login">
                  <animated.button 
                    style={menuItemSpring}
                    className="text-purple-200 hover:text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
                  >
                    Log in
                  </animated.button>
                </Link>
                <Link to="/register">
                  <animated.button 
                    style={menuItemSpring}
                    className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium border border-purple-400/30 transition-all duration-200"
                  >
                    Sign up
                  </animated.button>
                </Link>
              </>
            )}
          </div>
           
          {/* Mobile menu button */}
          <div className="md:hidden ml-4">
            <animated.button 
              style={menuItemSpring}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-purple-200 hover:text-white hover:bg-purple-700/30 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </animated.button>
          </div>
        </div>
      </animated.nav>
       
      {/* Mobile menu with React Spring animation */}
      {isMenuOpen && (
        <animated.div 
          style={mobileMenuSpring}
          className="md:hidden absolute top-full mt-3 w-64 rounded-2xl bg-gradient-to-b from-purple-900/80 to-purple-800/60 backdrop-blur-lg border border-purple-600/30 shadow-lg shadow-purple-900/40 overflow-hidden z-10"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Home', 'Product', 'Pricing', 'Blog', 'Company'].map((item, index) => (
              <animated.a 
                key={item}
                href="#"
                style={{
                  opacity: mobileMenuSpring.opacity,
                  transform: mobileMenuSpring.transform,
                  delay: index * 100
                }}
                className="text-purple-200 hover:text-white hover:bg-purple-700/30 block px-3 py-2 rounded-full text-base font-medium"
              >
                {item}
              </animated.a>
            ))}
            <div className="pt-4 pb-3 border-t border-purple-600/30">
              {userLoggedIn ? (
                <animated.button 
                  style={mobileMenuSpring}
                  onClick={handleLogout}
                  className="w-full text-left text-purple-200 hover:text-white hover:bg-purple-700/30 block px-3 py-2 rounded-full text-base font-medium"
                >
                  Logout
                </animated.button>
              ) : (
                <>
                  <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                    <animated.button 
                      style={mobileMenuSpring}
                      className="w-full text-left text-purple-200 hover:text-white hover:bg-purple-700/30 block px-3 py-2 rounded-full text-base font-medium"
                    >
                      Log in
                    </animated.button>
                  </Link>
                  <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                    <animated.button 
                      style={mobileMenuSpring}
                      className="w-full mt-2 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm block px-3 py-2 rounded-full text-base font-medium text-center border border-purple-400/30"
                    >
                      Sign up
                    </animated.button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </animated.div>
      )}
    </header>
  );
};

export default Header;