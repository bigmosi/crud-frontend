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
import clearAuthenticationToken from './components/authUtils';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { id } = useParams();

  const handleLogout = () => {
    clearAuthenticationToken();
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="App">
        <Navigation isAuthenticated={isAuthenticated} onLogout={handleLogout} />
        <Routes>
          <Route path="/login" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
          <Route path="/register" element={<Register />} />

          {isAuthenticated ? (
            <>
              <Route path="/" element={<RestaurantList />} />
              <Route path="/restaurants/create" element={<RestaurantCreate />} />
              <Route path="/restaurant/:id" element={<RestaurantDetails id={id} />} />
              <Route path="/restaurants/:id/edit" element={<RestaurantUpdate />} />
              <Route path="/restaurants/:id/delete" element={<RestaurantDelete />} />
            </>
          ) : (
            <Route path="*" element={<Navigate to="/login" />} />
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
