import React, { useEffect, useState } from 'react';
import apiService from '../services/apiService';

const ProfilePage = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    // Fetch profile data
    apiService.get('/profile').then(response => setProfile(response.data));
  }, []);

  return (
    <div>
      <h1>Profile</h1>
      <p>Email: {profile.email}</p>
      <p>Name: {profile.name}</p>
    </div>
  );
};

export default ProfilePage;

