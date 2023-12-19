import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
  }, [location.pathname]);

  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 800);
    };

    handleResize();

    const resizeListener = () => {
      window.addEventListener('resize', handleResize);
    };

    resizeListener();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isLoggedIn = localStorage.getItem('token');

  return (
    <nav className="bg-blue-500 p-4 w-screen">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between items-center">
        <h1 className="text-white text-lg font-bold mb-4 md:mb-0">FOODCOASTER</h1>

        {isMobileView ? (
          <Carousel showArrows={false} showStatus={false} showThumbs={false} infiniteLoop>
            <div className="text-white mt-6">-</div>
            <Link to="/" className="text-white font-bold">
              Home
            </Link>
            <Link
              to="/about"
              className="text-white inline-block hover:text-base hover:font-bold ease-in-out duration-150"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-white inline-block hover:text-base hover:font-bold ease-in-out duration-150"
            >
              Contact Us
            </Link>
            {isLoggedIn && (
              <Link
                to="/history"
                className="text-white inline-block hover:text-base hover:font-bold ease-in-out duration-150"
              >
                Order History
              </Link>
            )}
            <Link to="/login" className="text-white">
              Login
            </Link>
            <Link to="/signUp" className="text-white">
              Sign Up
            </Link>
          </Carousel>
        ) : (
          <div className="flex items-center space-x-4">
            <div className="md:ml-auto md:space-x-4">
              <Link to="/" className="text-white font-bold">
                Home
              </Link>
              <Link
                to="/about"
                className="text-white inline-block hover:text-base hover:font-bold ease-in-out duration-150"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-white inline-block hover:text-base hover:font-bold ease-in-out duration-150"
              >
                Contact Us
              </Link>
              {isLoggedIn && (
                <Link
                  to="/history"
                  className="text-white inline-block hover:text-base hover:font-bold ease-in-out duration-150"
                >
                  Order History
                </Link>
              )}
            </div>
          </div>
        )}

        <div className="hidden md:flex items-center space-x-4">
          {!isLoggedIn ? (
            <form>
              <Link to="/login" className="btn btn-primary mx-1 text-white" role="button">
                Login
              </Link>
              <span className="text-white mx-3">|</span>
              <Link to="/signUp" className="btn btn-primary text-white" role="button">
                Sign Up
              </Link>
            </form>
          ) : (
            <button className="btn btn-primary text-white" onClick={handleLogout}>
              Log Out
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
