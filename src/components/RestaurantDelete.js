import React from 'react';
import { useParams } from 'react-router-dom';

function RestaurantDelete() {
  const { id } = useParams();

  const handleDelete = () => {
    fetch(`/restaurants/${id}`, {
      method: 'DELETE',
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
