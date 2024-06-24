import React from 'react';
import LoginLayout from './layout';
import Link from 'next/link';

const LoginPage = () => {

    return (
        <LoginLayout>
            <Link href='/login'>Login with Google</Link>
            <Link href='/login'>Create account</Link>
        </LoginLayout>
    )
}

export default LoginPage