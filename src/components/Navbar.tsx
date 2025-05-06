'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { deleteCookie } from 'cookies-next';
import { FaUserCircle, FaSignOutAlt, FaGraduationCap, FaCalendarAlt, FaUsers, FaCheckSquare } from 'react-icons/fa';
import { useChecklistStore } from '@/stores/useChecklistStore';

export default function Navbar() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [isClient, setIsClient] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const resetUserItems = useChecklistStore(state => state.resetUserItems);

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
        // setIsDesktopDropdownOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('storage', checkAuth);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSignOut = () => {
    // Reset user checklist items
    resetUserItems();
    
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
    
    // Update state and redirect
    setIsSignedIn(false);
    router.push('/signin');
  };

  return (
    <nav className="bg-red-700 bg-opacity-95 text-white shadow-lg" aria-label="Main Navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2 hover:text-gray-300">
              <Image
                src="/OberlinCollege-logo.png"
                alt="Oberlin College Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="font-bold text-2xl">ObieQuest</span>
            </Link>
            {isClient && isSignedIn && (
              <div className="hidden md:flex items-center space-x-6">
                <Link href="/checklist" className="flex items-center text-base font-medium hover:text-gray-300">
                  <FaCheckSquare className="mr-2 text-lg" aria-hidden="true" />
                  My Checklist
                </Link>
                <Link href="/academic" className="flex items-center text-base font-medium hover:text-gray-300">
                  <FaGraduationCap className="mr-2 text-lg" aria-hidden="true" />
                  Academic Resources
                </Link>
                <Link href="/events" className="flex items-center text-base font-medium hover:text-gray-300">
                  <FaCalendarAlt className="mr-2 text-lg" aria-hidden="true" />
                  Campus Events
                </Link>
                <Link href="/organizations" className="flex items-center text-base font-medium hover:text-gray-300">
                  <FaUsers className="mr-2 text-lg" aria-hidden="true" />
                  Student Organizations
                </Link>
              </div>
            )}
          </div>
          {isClient && isSignedIn && (
            <div className="hidden md:flex items-center space-x-2">
              <Link href="/profile" className="flex items-center px-4 py-2 rounded-md text-base font-medium hover:bg-red-800">
                <FaUserCircle className="mr-2 h-5 w-5" aria-hidden="true" />
                <span>{userName}</span>
              </Link>
              <button onClick={handleSignOut} className="flex items-center bg-white text-red-700 px-4 py-2 rounded-md text-base font-medium hover:bg-gray-100">
                <FaSignOutAlt className="mr-2" aria-hidden="true" />
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
} 