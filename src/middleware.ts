import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Paths that don't require authentication
const publicPaths = ['/signin', '/signup'];

export function middleware(request: NextRequest) {
  // Get the pathname from the URL
  const path = request.nextUrl.pathname;

  // Check if the path is public
  const isPublicPath = publicPaths.some(publicPath => path.startsWith(publicPath));

  // Get the authentication status from the cookie
  const isAuthenticated = request.cookies.has('isSignedIn') && 
                          request.cookies.get('isSignedIn')?.value === 'true';

  // Redirect to signin page if not authenticated and trying to access a private page
  if (!isAuthenticated && !isPublicPath) {
    // If the request is for the root, also redirect to signin
    if (path === '/') {
      return NextResponse.redirect(new URL('/signin', request.url));
    }
    
    // For other protected routes
    return NextResponse.redirect(new URL('/signin', request.url));
  }

  // Redirect to home page if already authenticated and trying to access signin/signup
  if (isAuthenticated && isPublicPath) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Continue with the request for valid paths
  return NextResponse.next();
}

// Configure the middleware to run on specific paths
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public folder)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.png$|.*\\.jpg$).*)',
  ],
}; 