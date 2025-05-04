'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkedAlt, FaCheckSquare } from 'react-icons/fa';

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
          <h1 className="text-5xl font-bold mb-4 transition-transform transform hover:scale-105 hover:text-red-300">Welcome to ObieQuest</h1>
          <p className="text-xl mb-6 italic">Your personalized guide to Oberlin College</p>
          <Link href="/checklist" className="inline-block bg-white text-red-700 px-8 py-3 rounded-lg shadow hover:bg-gray-50 transition duration-300">
            <div className="flex items-center">
              <FaCheckSquare className="text-xl mr-2" />
              <span className="font-semibold">Start Your Journey</span>
            </div>
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <FaMapMarkedAlt className="h-6 w-6" />
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
          ObieQuest enhances the student experience by providing a comprehensive platform for students to manage their academic, extracurricular, and personal commitments. 
          It allows students to create a personalized checklist encompassing academics, organizations, professional development, sports, and community events.
        </p>
        <p className="text-gray-700">
          This tool helps students keep track of their goals, tasks, and responsibilities, ensuring they make the most of their time at Oberlin College.
        </p>
      </section>
    </div>
  );
}
