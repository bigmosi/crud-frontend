import React from 'react';
import { Link } from 'react-router-dom';

import './Navigation.css';

const Navigation = ({ isAuthenticated, onLogout }) => {
  return (
    <nav className="navigation-container">
      <ul className="navigation-list">
        {isAuthenticated ? (
          <>
            <li className="navigation-item">
              <Link to="/" className="navigation-link">
                Home
              </Link>
            </li>
            <li className="navigation-item">
              <Link to="/restaurants/create" className="navigation-link">
                Create Restaurant
              </Link>
            </li>
            <li className="navigation-item">
              <Link to="/restaurants" className="navigation-link">
                List of Restaurants
              </Link>
            </li>
            <li className="navigation-item">
              <button onClick={onLogout} className="navigation-button">
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li className="navigation-item">
              <Link to="/login" className="navigation-link">
                Login
              </Link>
            </li>
            <li className="navigation-item">
              <Link to="/register" className="navigation-link">
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
