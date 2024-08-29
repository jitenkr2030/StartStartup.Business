import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to StartStartup.Business</h1>
      <Link to="/login">Login</Link> or <Link to="/signup">Sign Up</Link>
    </div>
  );
};

export default HomePage;
