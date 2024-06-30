'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Profile = () => {
  const [userInfo, setUserInfo] = useState(null);
  const router = useRouter()

  useEffect(() => {
    axios.get('/').then(response => {
      setUserInfo(response.data);
      console.log(JSON.stringify(userInfo, null, 2))
    }).catch(error => {
      console.error('Error fetching profile:', error);
    });
  }, []);

  const handleLogout = () => {
    router.push('http://localhost:3000/logout')
  }

  if (!userInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
