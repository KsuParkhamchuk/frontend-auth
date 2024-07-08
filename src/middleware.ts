import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {

  try {
    const response = await fetch('http://localhost:3000/check-auth', {
      credentials: 'include',
    });

    const data = await response.json()

    if(!data.isAuthenticated) {
      return NextResponse.redirect('http://localhost:8000/login')
    }
  } catch (error) {
    console.error('Auth check failed:', error);
  }
    return NextResponse.next()

}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|login).*)',
  ],
};