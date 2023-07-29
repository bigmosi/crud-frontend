import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ isAuthenticated, onLogout }) => {
  return (
    <nav>
      <ul>
        {isAuthenticated ? (
          <>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/restaurants/create">Create Restaurant</Link>
            </li>
            <li>
              <Link to="/restaurants">List of Restaurants</Link>
            </li>
            <li>
              <button onClick={onLogout}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
