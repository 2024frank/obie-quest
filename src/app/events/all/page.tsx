'use client';

import { useState } from 'react';
import { FaCalendarAlt, FaSearch, FaFilter } from 'react-icons/fa';
import Link from 'next/link';

export default function AllEventsPage() {
  const [filterCategory, setFilterCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Example events data - in a real app, this would come from an API or database
  const events = [
    {
      id: 1,
      title: 'Oberlin Orchestra Concert',
      date: 'October 15, 2023',
      time: '8:00 PM',
      location: 'Finney Chapel',
      category: 'performance',
      description: 'The Oberlin Orchestra performs works by Beethoven, Brahms, and contemporary composers.'
    },
    {
      id: 2,
      title: 'Environmental Justice Panel',
      date: 'October 18, 2023',
      time: '4:30 PM',
      location: 'Nancy Schrom Dye Lecture Hall',
      category: 'academic',
      description: 'Panel discussion with environmental activists and scholars discussing local and global issues.'
    },
    {
      id: 3,
      title: 'Observatory Open House',
      date: 'October 20, 2023',
      time: '9:00 PM',
      location: 'Peters Hall Observatory',
      category: 'academic',
      description: 'View the night sky through Oberlin\'s telescopes with guidance from astronomy faculty.'
    },
    {
      id: 4,
      title: 'Fall Break Begins',
      date: 'October 23, 2023',
      time: 'All Day',
      location: 'Campus-wide',
      category: 'academic',
      description: 'No classes from October 23-31. Residence halls remain open. Some facilities have limited hours.'
    },
    {
      id: 5,
      title: 'Gamelan Ensemble Concert',
      date: 'November 2, 2023',
      time: '7:30 PM',
      location: 'Warner Concert Hall',
      category: 'performance',
      description: 'The Oberlin Gamelan Ensemble presents traditional and contemporary music of Indonesia.'
    },
    {
      id: 6,
      title: 'Mental Health Awareness Week Kickoff',
      date: 'November 5, 2023',
      time: '12:00 PM',
      location: 'Wilder Bowl',
      category: 'community',
      description: 'Activities, resources, and speakers on the importance of mental health and wellness.'
    },
    {
      id: 7,
      title: 'Women\'s Basketball vs. Kenyon',
      date: 'November 7, 2023',
      time: '6:00 PM',
      location: 'Philips Gymnasium',
      category: 'sports',
      description: 'Oberlin Yeowomen face off against Kenyon College in conference play.'
    },
    {
      id: 8,
      title: 'OC Jazz Ensemble',
      date: 'November 10, 2023',
      time: '8:00 PM',
      location: 'Cat in the Cream',
      category: 'performance',
      description: 'The Oberlin Jazz Ensemble performs classic and contemporary jazz pieces.'
    },
    {
      id: 9,
      title: 'Multicultural Resource Center Open House',
      date: 'November 12, 2023',
      time: '3:00 PM - 5:00 PM',
      location: 'MRC, Wilder Hall',
      category: 'community',
      description: 'Learn about resources, programs, and support available through the MRC.'
    },
    {
      id: 10,
      title: 'Physics & Astronomy Colloquium',
      date: 'November 15, 2023',
      time: '4:30 PM',
      location: 'Wright Lecture Hall',
      category: 'academic',
      description: 'Guest lecture by Dr. Maria Chen on recent developments in astrophysics.'
    },
    {
      id: 11,
      title: 'Student Senate Town Hall',
      date: 'November 17, 2023',
      time: '7:00 PM',
      location: 'King Building 106',
      category: 'community',
      description: 'Open forum for students to discuss campus issues with student senate representatives.'
    },
    {
      id: 12,
      title: 'OCircus Fall Show',
      date: 'November 18-19, 2023',
      time: 'Various Times',
      location: 'Hales Gymnasium',
      category: 'performance',
      description: 'Student-run circus featuring acrobatics, aerials, juggling, and more.'
    }
  ];

  // Filter events based on category and search query
  const filteredEvents = events.filter(event => {
    const matchesCategory = filterCategory === 'all' || event.category === filterCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          event.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryColor = (category: string): string => {
    switch(category) {
      case 'academic': return 'bg-blue-100 text-blue-800';
      case 'performance': return 'bg-purple-100 text-purple-800';
      case 'community': return 'bg-green-100 text-green-800';
      case 'sports': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">All Campus Events</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Browse upcoming events at Oberlin College and Conservatory
        </p>
      </header>

      {/* Search and Filter */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search events..."
                className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <FaFilter className="text-gray-400" />
            <select
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
            >
              <option value="all">All Categories</option>
              <option value="academic">Academic</option>
              <option value="performance">Performances</option>
              <option value="community">Community</option>
              <option value="sports">Sports</option>
            </select>
          </div>
        </div>
      </div>

      {/* Events List */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-6">
          <FaCalendarAlt className="text-red-700 mr-3 h-6 w-6" />
          <h2 className="text-2xl font-semibold">Events</h2>
        </div>

        {filteredEvents.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">No events found matching your criteria.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredEvents.map(event => (
              <div key={event.id} className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="bg-red-100 text-red-700 p-3 rounded-lg text-center min-w-[100px]">
                    <p className="font-bold text-lg">{event.date.split(' ')[0].toUpperCase()}</p>
                    <p className="text-2xl font-bold">{event.date.split(' ')[1].replace(',', '')}</p>
                    <p className="text-sm">{event.time}</p>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-lg mb-1">{event.title}</h3>
                    <p className="text-gray-600 mb-2">{event.description}</p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className={`${getCategoryColor(event.category)} text-xs px-2 py-1 rounded`}>
                        {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700"><strong>Location:</strong> {event.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="text-center mt-8">
        <Link href="/events" className="text-red-700 hover:underline font-medium">
          Back to Events Overview
        </Link>
      </div>
    </div>
  );
} 