'use client'

import React from 'react';

const Profile = () => {

  const handleLogout = () => {
    window.location.href = 'http://localhost:3000/api/logout';
  }

  return (
    <div>
      <h1>Profile</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
