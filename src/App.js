import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import RestaurantList from './components/RestaurantList';
import RestaurantCreate from './components/RestaurantCreate';
import RestaurantDetails from './components/RestaurantDetails';
import RestaurantUpdate from './components/RestaurantUpdate';
import RestaurantDelete from './components/RestaurantDelete';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { id } = useParams();

  // Function to handle user logout
  const handleLogout = () => {
    // In a real application, you would clear the authentication token.
    // For this example, we'll just set the isAuthenticated state to false directly.
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="App">
        <Navigation isAuthenticated={isAuthenticated} onLogout={handleLogout} />
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
          <Route path="/register" element={<Register />} />

          {/* Private Routes */}
          {isAuthenticated ? (
            <>
              <Route path="/" element={<RestaurantList />} />
              <Route path="/restaurants/create" element={<RestaurantCreate />} />
              <Route path="/restaurant/:id" element={<RestaurantDetails id={id} />} />
              <Route path="/restaurants/:id/edit" element={<RestaurantUpdate />} />
              <Route path="/restaurants/:id/delete" element={<RestaurantDelete />} />
            </>
          ) : (
            // Redirect unauthorized users to login page
            <Route path="*" element={<Navigate to="/login" />} />
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
