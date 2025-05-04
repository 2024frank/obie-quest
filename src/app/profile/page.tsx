'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaUserCircle, FaGraduationCap, FaEnvelope, FaSave } from 'react-icons/fa';

export default function Profile() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [major, setMajor] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
    // Check if user is signed in
    const isSignedIn = localStorage.getItem('isSignedIn') === 'true';
    if (!isSignedIn) {
      router.push('/signin');
      return;
    }

    // Load user data from localStorage
    const storedName = localStorage.getItem('userName') || '';
    const storedEmail = localStorage.getItem('userEmail') || '';
    const storedMajor = localStorage.getItem('userMajor') || '';
    
    setFullName(storedName);
    setEmail(storedEmail);
    setMajor(storedMajor);
  }, [router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate saving delay
    setTimeout(() => {
      // Save to localStorage
      localStorage.setItem('userName', fullName);
      localStorage.setItem('userEmail', email);
      localStorage.setItem('userMajor', major);
      
      setIsLoading(false);
      setIsSaved(true);
      
      // Reset saved message after 3 seconds
      setTimeout(() => {
        setIsSaved(false);
      }, 3000);
    }, 800);
  };

  if (!isClient) {
    return null; // Prevent hydration issues
  }

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="bg-red-700 p-6 text-white">
        <h1 className="text-2xl font-bold flex items-center">
          <FaUserCircle className="mr-2 h-6 w-6" />
          Student Profile
        </h1>
      </div>
      
      <div className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUserCircle className="text-gray-400" />
              </div>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900"
                placeholder="John Doe"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="text-gray-400" />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900"
                placeholder="student@oberlin.edu"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="major" className="block text-sm font-medium text-gray-700 mb-1">
              Major
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaGraduationCap className="text-gray-400" />
              </div>
              <input
                id="major"
                name="major"
                type="text"
                value={major}
                onChange={(e) => setMajor(e.target.value)}
                className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900"
                placeholder="Computer Science"
              />
            </div>
          </div>
          
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isLoading}
              className={`flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 ${
                isLoading ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              <FaSave className="mr-2" />
              {isLoading ? 'Saving...' : 'Save Profile'}
            </button>
          </div>
          
          {isSaved && (
            <div className="mt-2 text-sm text-green-600 bg-green-50 p-2 rounded-md">
              Profile successfully updated!
            </div>
          )}
        </form>
      </div>
    </div>
  );
} 