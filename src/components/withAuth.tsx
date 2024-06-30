'use client'

import React from 'react';
import useAuth from './hooks/useAuth';
import { useRouter } from 'next/navigation';

const withAuth = (WrappedComponent: React.ComponentType<any>) => {
  const ComponentWithAuth = (props: any) => {
    const { isAuthenticated, isLoading } = useAuth();
    const router = useRouter()

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (!isAuthenticated) {
      router.push('/login')
      return null;
    }

    return <WrappedComponent {...props} />;
  };

//   ComponentWithAuth.displayName = `WithAuth(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return ComponentWithAuth;
};

export default withAuth;