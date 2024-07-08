'use client'

import { useRouter } from 'next/navigation';
import React from 'react';
import Image from 'next/image'
import Link from 'next/link';

const Login = () => {
  const router = useRouter();

  const handleLogin = async () => {
    router.push('http://localhost:3000/api/login')
  };

  return (
    <div className='bg-gray-950'>
        <nav className='flex flex-row-reverse absolute w-full'>
            <Link href='/about' className='px-5 py-7 text-gray-400 text-sm'>About</Link>
            <Link href='/contact' className='px-5 py-7 text-gray-400 text-sm'>Contact</Link>
            <Link href='/help' className='px-5 py-7 text-gray-400 text-sm'>Help</Link>
        </nav>
        <div className='h-screen flex justify-center items-center'>
            <div className='flex'>
                <div className="bg-[url('/login_img.png')] w-36 h-36 bg-contain mr-8 rounded-full"></div>
                <div className='flex flex-col md:min-w-60'>
                    <p className='text-white text-2xl font-bold mb-8'>Login to start the <br/><span className='text-indigo-300'>journey</span></p>
                    <button onClick={handleLogin} className='text-gray-400 flex justify-between items-center py-3 px-6 bg-gray-900 mb-8 text-sm w-full'>
                        Another way
                        <Image
                            alt='fingerprint icon'
                            src='fingerprint.svg'
                            width={24}
                            height={24}
                        />
                        </button>
                    <button onClick={handleLogin} className='text-gray-400 flex justify-between items-center py-3 px-6 bg-gray-900 text-sm w-full'>
                        Login with Google
                        <Image
                            alt='google logo icon'
                            src='google.svg'
                            width={24}
                            height={24}
                        />
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Login;
