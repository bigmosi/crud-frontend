import React from 'react';
import { useParams } from 'react-router-dom';
import configuration from '../config/configuration';

function RestaurantDelete() {
  const { id } = useParams();

  const handleDelete = () => {
    const token = localStorage.getItem('token');
    fetch(`${configuration.base_url}restaurants/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((response) => {
        if (response.ok) {
          console.log('Restaurant deleted successfully');
        } else {
          throw new Error('Failed to delete restaurant');
        }
      })
      .catch((error) => {
        console.error('Error deleting restaurant:', error.message);
      });
  };

  return (
    <div>
      <h2>Delete Restaurant</h2>
      <p>Are you sure you want to delete this restaurant?</p>
      <button onClick={handleDelete} type="button">Delete</button>
    </div>
  );
}

export default RestaurantDelete;
