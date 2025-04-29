'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaGraduationCap, FaCalendarAlt, FaUsers } from 'react-icons/fa';

export default function Home() {
  const router = useRouter();
  
  useEffect(() => {
    // Check if user is signed in
    const isSignedIn = localStorage.getItem('isSignedIn') === 'true';
    const isGuest = localStorage.getItem('isGuest') === 'true';
    
    // If not signed in or guest, redirect to sign-in page
    if (!isSignedIn && !isGuest) {
      router.push('/signin');
    }
  }, [router]);

  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section className="bg-red-700 text-white rounded-xl p-8 shadow-lg">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to ObieQuest</h1>
          <p className="text-xl mb-6">Your personalized guide to Oberlin College</p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link 
          href="/academic" 
          className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="h-14 w-14 bg-red-100 text-red-700 rounded-full flex items-center justify-center mb-4">
            <FaGraduationCap className="h-6 w-6" />
          </div>
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Academic Resources</h2>
          <p className="text-gray-800 text-center font-medium">
            Discover libraries, study spaces, tutoring, and more
          </p>
        </Link>

        <Link 
          href="/events" 
          className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="h-14 w-14 bg-red-100 text-red-700 rounded-full flex items-center justify-center mb-4">
            <FaCalendarAlt className="h-6 w-6" />
          </div>
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Campus Events</h2>
          <p className="text-gray-800 text-center font-medium">
            Stay updated on lectures, performances, club activities, and more
          </p>
        </Link>

        <Link 
          href="/organizations" 
          className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="h-14 w-14 bg-red-100 text-red-700 rounded-full flex items-center justify-center mb-4">
            <FaUsers className="h-6 w-6" />
          </div>
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Student Organizations</h2>
          <p className="text-gray-800 text-center font-medium">
            Explore clubs, cultural groups, and organizations across campus
          </p>
        </Link>
      </section>

      {/* About Section */}
      <section className="bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">About ObieQuest</h2>
        <p className="text-gray-700 mb-4">
          ObieQuest is designed to help Oberlin College students discover and navigate campus resources, 
          find great places to eat, stay connected with events, and track their college journey with 
          a personalized checklist.
        </p>
        <p className="text-gray-700">
          Whether you&apos;re a first-year student or a senior, ObieQuest will help you make the most of 
          your time at Oberlin!
        </p>
      </section>
    </div>
  );
}
