'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { deleteCookie } from 'cookies-next';
import { FaUserCircle, FaSignOutAlt, FaGraduationCap, FaCalendarAlt, FaUsers, FaChevronDown } from 'react-icons/fa';

export default function Navbar() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [isClient, setIsClient] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
    const checkAuth = () => {
      const signedIn = localStorage.getItem('isSignedIn') === 'true';
      setIsSignedIn(signedIn);
      
      if (signedIn) {
        // Get stored name or email
        const name = localStorage.getItem('userName');
        const email = localStorage.getItem('userEmail');
        
        // Extract username from email if available (part before @)
        if (email) {
          const emailUsername = email.split('@')[0];
          setUserName(emailUsername || 'User');
        } else if (name) {
          setUserName(name);
        } else {
          setUserName('User');
        }
      }
    };
    
    checkAuth();
    window.addEventListener('storage', checkAuth);
    
    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDesktopDropdownOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('storage', checkAuth);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSignOut = () => {
    // Remove from localStorage
    localStorage.removeItem('isSignedIn');
    localStorage.removeItem('isGuest');
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userYear');
    localStorage.removeItem('userMajor');
    
    // Clear all cookies by setting them to expire in the past
    deleteCookie('isSignedIn');
    deleteCookie('userEmail');
    deleteCookie('remember-me');
    deleteCookie('isGuest');
    deleteCookie('userYear');
    deleteCookie('userMajor');
    deleteCookie('userName');
    
    // Clear all localStorage completely (alternative approach)
    // localStorage.clear();
    
    // Update state and redirect
    setIsSignedIn(false);
    router.push('/signin');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDesktopDropdown = () => {
    setIsDesktopDropdownOpen(!isDesktopDropdownOpen);
  };

  return (
    <nav className="bg-red-700 bg-opacity-95 text-white shadow-lg" aria-label="Main Navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-4">
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={toggleDesktopDropdown}
                className="flex items-center space-x-1 focus:outline-none py-2 px-3 rounded hover:bg-red-800 text-xl"
                aria-expanded={isDesktopDropdownOpen}
                aria-controls="desktop-menu"
                aria-label="Main menu"
              >
                <span className="font-bold text-2xl">ObieQuest</span>
                {isClient && isSignedIn && (
                  <FaChevronDown className={`transition-transform ml-1 ${isDesktopDropdownOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                )}
              </button>
              
              {/* Desktop dropdown menu - Only shown when signed in */}
              {isClient && isSignedIn && isDesktopDropdownOpen && (
                <div 
                  id="desktop-menu"
                  className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10 hidden md:block"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="main-menu-button"
                >
                  <div className="py-1" role="none">
                    <Link 
                      href="/"
                      className="block px-4 py-3 text-base text-gray-800 hover:bg-gray-100 hover:text-gray-900"
                      onClick={() => setIsDesktopDropdownOpen(false)}
                      role="menuitem"
                    >
                      Home
                    </Link>
                    <Link 
                      href="/academic" 
                      className="flex items-center px-4 py-3 text-base text-gray-800 hover:bg-gray-100 hover:text-gray-900"
                      onClick={() => setIsDesktopDropdownOpen(false)}
                      role="menuitem"
                    >
                      <FaGraduationCap className="mr-2 text-red-700 text-lg" aria-hidden="true" />
                      Academic Resources
                    </Link>
                    <Link 
                      href="/events" 
                      className="flex items-center px-4 py-3 text-base text-gray-800 hover:bg-gray-100 hover:text-gray-900"
                      onClick={() => setIsDesktopDropdownOpen(false)}
                      role="menuitem"
                    >
                      <FaCalendarAlt className="mr-2 text-red-700 text-lg" aria-hidden="true" />
                      Campus Events
                    </Link>
                    <Link 
                      href="/organizations" 
                      className="flex items-center px-4 py-3 text-base text-gray-800 hover:bg-gray-100 hover:text-gray-900"
                      onClick={() => setIsDesktopDropdownOpen(false)}
                      role="menuitem"
                    >
                      <FaUsers className="mr-2 text-red-700 text-lg" aria-hidden="true" />
                      Student Organizations
                    </Link>
                  </div>
                </div>
              )}
            </div>
            {isClient && (
              <div className="hidden md:flex items-center space-x-2">
                <Image 
                  src="/OberlinCollege-logo.png" 
                  alt="Oberlin College Logo" 
                  width={36} 
                  height={36}
                  className="rounded-sm"
                />
                <span className="text-base font-light">Oberlin College and Conservatory</span>
              </div>
            )}
          </div>
          
          {/* Authentication Links - Different options for signed in vs not signed in */}
          {isClient && isSignedIn && (
            <div className="hidden md:flex items-center space-x-2">
              <Link 
                href="/profile" 
                className="flex items-center px-4 py-2 rounded-md text-base font-medium hover:bg-red-800"
                aria-label="Your profile"
              >
                <FaUserCircle className="mr-2 h-5 w-5" aria-hidden="true" />
                <span>{userName}</span>
              </Link>
              <button 
                onClick={handleSignOut}
                className="flex items-center bg-white text-red-700 px-4 py-2 rounded-md text-base font-medium hover:bg-gray-100"
                aria-label="Sign out"
              >
                <FaSignOutAlt className="mr-2" aria-hidden="true" />
                Sign Out
              </button>
            </div>
          )}
          
          <div className="md:hidden flex items-center space-x-2">
            {isClient && isSignedIn ? (
              <>
                <Link 
                  href="/profile" 
                  className="p-3 rounded-md text-white hover:bg-red-800"
                  aria-label="Your profile"
                >
                  <FaUserCircle className="h-7 w-7" aria-hidden="true" />
                </Link>
                <button 
                  onClick={handleSignOut}
                  className="p-3 rounded-md text-white hover:bg-red-800"
                  aria-label="Sign out"
                >
                  <FaSignOutAlt className="h-7 w-7" aria-hidden="true" />
                </button>
              </>
            ) : null}
            
            {/* Mobile menu button - Only show for signed in users */}
            {isClient && isSignedIn && (
              <button 
                type="button" 
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-3 rounded-md text-white hover:bg-red-800 focus:outline-none"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                <svg className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on mobile menu state - Only for signed in users */}
      {isClient && isSignedIn && isMobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-red-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              href="/"
              className="flex items-center px-4 py-3 rounded-md text-white hover:bg-red-900 transition-colors text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/academic" 
              className="flex items-center px-4 py-3 rounded-md text-white hover:bg-red-900 transition-colors text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FaGraduationCap className="mr-3 text-xl" aria-hidden="true" />
              Academic Resources
            </Link>
            <Link 
              href="/events" 
              className="flex items-center px-4 py-3 rounded-md text-white hover:bg-red-900 transition-colors text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FaCalendarAlt className="mr-3 text-xl" aria-hidden="true" />
              Campus Events
            </Link>
            <Link 
              href="/organizations" 
              className="flex items-center px-4 py-3 rounded-md text-white hover:bg-red-900 transition-colors text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FaUsers className="mr-3 text-xl" aria-hidden="true" />
              Student Organizations
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 