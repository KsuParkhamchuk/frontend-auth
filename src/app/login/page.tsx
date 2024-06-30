'use client'

import { useRouter } from 'next/navigation';
import React from 'react';

const Login = () => {
  const router = useRouter();

  const handleLogin = async () => {
    router.push('http://localhost:3000/login')
  };

  return (
    <div>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
};

export default Login;
