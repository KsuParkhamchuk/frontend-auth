'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

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
