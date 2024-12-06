import { NextResponse } from 'next/server';

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  const isAuthenticated = await request.cookies.get('isAuthenticated');
  const allowAccess = request.cookies.get('allowAccess');

  // for puppeteer backend
  if (allowAccess && pathname.startsWith('/app/journal/')) {
    return NextResponse.next();
  }

  // If the user is NOT authenticated and tries to access `/app/:path*`, redirect to `/auth`
  if (!isAuthenticated && pathname.startsWith('/app')) {
    console.warn(isAuthenticated)
    return NextResponse.redirect(new URL('/auth', request.url));
  }

  // If the user IS authenticated and tries to access `/auth` redirect to `/app/journals`
  if (isAuthenticated && pathname === '/auth') {
    return NextResponse.redirect(new URL('/app', request.url));
  }

  return NextResponse.next();
}

// Paths to protect
export const config = {
  matcher: ['/app/:path*', '/auth'],
}
