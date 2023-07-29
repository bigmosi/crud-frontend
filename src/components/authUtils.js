const clearAuthenticationToken = () => {
    try {
      localStorage.removeItem('token');
  
      window.location.replace('/login');
    } catch (error) {
      console.error('Error clearing authentication token:', error);
    }
  };
  
  export default clearAuthenticationToken;
  