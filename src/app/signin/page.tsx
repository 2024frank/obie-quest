'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { setCookie } from 'cookies-next';
import { FaUserCircle, FaLock } from 'react-icons/fa';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

  // Check if already signed in
  useEffect(() => {
    const isSignedIn = localStorage.getItem('isSignedIn') === 'true';
    if (isSignedIn) {
      router.push('/');
    }
  }, [router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate authentication delay
    setTimeout(() => {
      // Store authentication state in localStorage
      localStorage.setItem('isSignedIn', 'true');
      localStorage.setItem('userEmail', email);
      
      // Also store in cookies for middleware
      setCookie('isSignedIn', 'true', { maxAge: 60 * 60 * 24 * 7 }); // 7 days
      setCookie('userEmail', email, { maxAge: 60 * 60 * 24 * 7 });
      
      // Trigger a storage event to update other components
      window.dispatchEvent(new Event('storage'));
      
      // No actual authentication, just redirect to home
      router.push('/');
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] px-4 py-6 sm:px-6">
      <div className="bg-white bg-opacity-90 p-5 sm:p-8 rounded-xl shadow-xl w-full max-w-md">
        <div className="text-center mb-6 sm:mb-10">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-2 sm:mb-3">Welcome to ObieQuest</h1>
          <p className="text-lg sm:text-xl text-gray-700">Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-8" aria-labelledby="signin-heading">
          <div>
            <label htmlFor="email" className="block text-base sm:text-lg font-medium text-gray-800 mb-1 sm:mb-2">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUserCircle className="text-gray-500 text-lg sm:text-xl" aria-hidden="true" />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="pl-12 w-full px-3 sm:px-4 py-2 sm:py-3 text-base sm:text-lg text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                placeholder=""
                aria-required="true"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-base sm:text-lg font-medium text-gray-800 mb-1 sm:mb-2">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="text-gray-500 text-lg sm:text-xl" aria-hidden="true" />
              </div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="pl-12 w-full px-3 sm:px-4 py-2 sm:py-3 text-base sm:text-lg text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                placeholder=""
                aria-required="true"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 sm:h-5 sm:w-5 text-red-600 focus:ring-red-600 border-gray-300 rounded"
                aria-labelledby="remember-label"
              />
              <label id="remember-label" htmlFor="remember-me" className="ml-2 block text-base sm:text-lg text-gray-700">
                Remember me
              </label>
            </div>

            <div className="text-sm sm:text-base">
              <button
                type="button"
                className="font-medium text-red-600 hover:text-red-500 underline focus:outline-none"
                onClick={() => setShowPopup(true)}
              >
                Forgot your password?
              </button>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full flex justify-center py-2 sm:py-3 px-4 border border-transparent rounded-lg shadow-sm text-base sm:text-lg font-medium text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 ${
                loading ? 'opacity-70 cursor-not-allowed' : ''
              }`}
              aria-busy={loading}
              aria-disabled={loading}
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </div>
        </form>

        <p className="mt-6 sm:mt-8 text-center text-base sm:text-lg text-gray-700">
          Don&apos;t have an account?{' '}
          <Link href="/signup" className="font-medium text-red-600 hover:text-red-500 underline">
            Sign up
          </Link>
        </p>
      </div>

      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full text-center">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Under Construction</h3>
            <p className="text-gray-700 mb-6">Password reset functionality is coming soon. Please check back later!</p>
            <button
              className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800 transition-colors font-medium"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}