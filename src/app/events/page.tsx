'use client';

import { useState } from 'react';
import { FaCalendarAlt, FaMusic, FaTheaterMasks, FaUsers, FaGraduationCap, FaRunning, FaCalendarPlus, FaShare, FaFilter } from 'react-icons/fa';
import Link from 'next/link';

// Define our categories and their associated events
const categories = [
  { id: 'all', name: 'All Categories' },
  { id: 'conservatory', name: 'Conservatory of Music' },
  { id: 'artsdept', name: 'Arts Department' },
  { id: 'athletics', name: 'Athletics Department' },
  { id: 'studentlife', name: 'Student Life' },
  { id: 'academics', name: 'Academic Departments' }
];

// Sample events with category tags
const allEvents = [
  {
    id: 1,
    title: 'Spring Concert Series',
    description: 'Annual celebration featuring student performances and guest artists.',
    date: 'April 28-30, 2023',
    venue: 'Finney Chapel',
    category: 'conservatory'
  },
  {
    id: 2,
    title: 'Commencement & Reunion Weekend',
    description: 'Graduation ceremony and alumni celebrations.',
    date: 'May 26-29, 2023',
    venue: 'Tappan Square',
    category: 'academics'
  },
  {
    id: 3,
    title: 'Summer Jazz Festival',
    description: 'Three-day festival featuring jazz performances from students and faculty.',
    date: 'June 15-17, 2023',
    venue: 'Conservatory Courtyard',
    category: 'conservatory'
  },
  {
    id: 4,
    title: 'Faculty Lecture Series',
    description: 'Distinguished faculty members share research and insights.',
    date: 'Every Wednesday, 4:30 PM',
    venue: 'King Building',
    category: 'academics'
  },
  {
    id: 5,
    title: 'Student Art Exhibition',
    description: 'Showcasing work from senior studio art majors.',
    date: 'May 5-20, 2023',
    venue: 'Allen Memorial Art Museum',
    category: 'artsdept'
  },
  {
    id: 6,
    title: 'Varsity Basketball Game',
    description: 'Oberlin Yeomen vs. Kenyon College',
    date: 'February 18, 2023, 7:00 PM',
    venue: 'Philips Gym',
    category: 'athletics'
  },
  {
    id: 7,
    title: 'Cultural Festival',
    description: 'Celebration of diversity with food, performances, and activities.',
    date: 'April 15, 2023',
    venue: 'Wilder Bowl',
    category: 'studentlife'
  },
  {
    id: 8,
    title: 'Theater Department Production',
    description: 'Student-led production of "A Midsummer Night\'s Dream"',
    date: 'March 10-12, 2023',
    venue: 'Hall Auditorium',
    category: 'artsdept'
  }
];

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showAllEvents, setShowAllEvents] = useState(false);
  
  // Filter events based on selected category
  const filteredEvents = selectedCategory === 'all' 
    ? allEvents 
    : allEvents.filter(event => event.category === selectedCategory);

  // Get the current category name for display
  const currentCategoryName = categories.find(cat => cat.id === selectedCategory)?.name || 'All Categories';
  
  // Toggle between showing limited events and all events
  const displayedEvents = showAllEvents ? filteredEvents : filteredEvents.slice(0, 3);
  
  // Handle "View All Events" button click
  const handleViewAllEvents = () => {
    setShowAllEvents(!showAllEvents);
  };
  
  return (
    <div className="space-y-8">
      <header className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Campus Events</h1>
        <p className="text-xl text-gray-800 max-w-3xl mx-auto font-medium">
          Stay updated on lectures, performances, club activities, and more happening at Oberlin.
        </p>
      </header>
      
      {/* Category Filter */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <FaFilter className="text-red-700 mr-3 h-5 w-5" />
            <h2 className="text-xl font-semibold text-gray-800">Filter Events</h2>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full sm:w-1/2">
            <label htmlFor="category-filter" className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              id="category-filter"
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setShowAllEvents(false); // Reset to showing limited events on category change
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white text-gray-800"
            >
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      {/* Upcoming Events */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <FaCalendarAlt className="text-red-700 mr-3 h-6 w-6" />
            <h2 className="text-2xl font-semibold text-gray-800">
              {selectedCategory === 'all' ? 'All Upcoming Events' : `${currentCategoryName} Events`}
            </h2>
          </div>
          {selectedCategory !== 'all' && (
            <button 
              onClick={() => setSelectedCategory('all')}
              className="text-red-700 hover:underline text-sm font-medium"
            >
              View All Categories
            </button>
          )}
        </div>
        
        <div className="space-y-4">
          {filteredEvents.length > 0 ? (
            <>
              {displayedEvents.map(event => (
                <div key={event.id} className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-xl text-gray-800">{event.title}</h3>
                      <p className="text-gray-700 mb-2">{event.description}</p>
                      <div className="bg-gray-50 p-3 rounded mb-2">
                        <p className="text-gray-900"><strong className="text-red-700">Date:</strong> {event.date}</p>
                        <p className="text-gray-900"><strong className="text-red-700">Venue:</strong> {event.venue}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="text-red-700 hover:text-red-800">
                        <FaCalendarPlus className="h-5 w-5" title="Add to calendar" />
                      </button>
                      <button className="text-red-700 hover:text-red-800">
                        <FaShare className="h-5 w-5" title="Share event" />
                      </button>
                    </div>
                  </div>
                  <Link href="#" className="text-red-700 hover:underline text-sm font-medium">View details</Link>
                </div>
              ))}
            
              <button 
                onClick={handleViewAllEvents}
                className="block text-center bg-red-700 text-white py-2 rounded hover:bg-red-800 transition-colors font-medium w-full"
              >
                {showAllEvents ? 'Show Less' : `View All ${filteredEvents.length} Events`}
              </button>
            </>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-600">No events found for this category. Try selecting a different category.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Music & Performances */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <FaMusic className="text-red-700 mr-3 h-6 w-6" />
          <h2 className="text-2xl font-semibold text-gray-800">Music & Performances</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-xl mb-2 text-gray-800">Conservatory Concerts</h3>
            <p className="text-gray-700 mb-2">Regular performances by Oberlin Conservatory students and faculty.</p>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Venues:</strong> Warner Concert Hall, Kulas Recital Hall, Finney Chapel</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Ticket Info:</strong> Many performances are free; check the Conservatory calendar</p>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-xl mb-2 text-gray-800">Artist Recital Series</h3>
            <p className="text-gray-700 mb-2">World-renowned artists and ensembles performing at Oberlin.</p>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Venue:</strong> Finney Chapel</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Ticket Info:</strong> Tickets available at Central Ticket Service</p>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-xl mb-2 text-gray-800">Student Bands & Performances</h3>
            <p className="text-gray-700 mb-2">Showcases of student musical groups from various genres.</p>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Venues:</strong> Cat in the Cream, &apos;Sco, Dionysus Club</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Ticket Info:</strong> Varies by event, many are free or low-cost</p>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-xl mb-2 text-gray-800">Dance Performances</h3>
            <p className="text-gray-700 mb-2">Showcases of choreography and dance by students and visiting artists.</p>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Venue:</strong> Warner Center for the Performing Arts</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Ticket Info:</strong> Available through Central Ticket Service</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Theater & Arts */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <FaTheaterMasks className="text-red-700 mr-3 h-6 w-6" />
          <h2 className="text-2xl font-semibold text-gray-800">Theater & Arts</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-xl mb-2 text-gray-800">Theater Department Productions</h3>
            <p className="text-gray-700 mb-2">Main stage productions by the Theater Department, featuring student actors and designers.</p>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Venues:</strong> Hall Auditorium, Little Theater</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Ticket Info:</strong> Central Ticket Service</p>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-xl mb-2 text-gray-800">Student Theater Productions</h3>
            <p className="text-gray-700 mb-2">Independent productions by student theater groups.</p>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Venues:</strong> Little Theater, Kander Theater</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Groups:</strong> Oberlin Student Theater Association, Oberlin Musical Theater Association</p>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-xl mb-2 text-gray-800">Art Exhibitions</h3>
            <p className="text-gray-700 mb-2">Rotating exhibitions at the Allen Memorial Art Museum and student galleries.</p>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Venues:</strong> Allen Memorial Art Museum, Fisher Gallery</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Hours:</strong> Varies by venue, check museum website</p>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-xl mb-2 text-gray-800">Cinema Studies Screenings</h3>
            <p className="text-gray-700 mb-2">Film screenings and discussions by the Cinema Studies program.</p>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Venue:</strong> Apollo Theatre, classroom venues</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Ticket Info:</strong> Many screenings are free</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Student Organizations */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <FaUsers className="text-red-700 mr-3 h-6 w-6" />
            <h2 className="text-2xl font-semibold text-gray-800">Student Organizations</h2>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://www.oberlin.edu/life-at-oberlin/clubs-organizations"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-700 hover:underline font-medium flex items-center"
            >
              <span>Official Directory</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
            <Link href="/organizations" className="text-red-700 hover:underline font-medium">
              View Complete List
            </Link>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-xl mb-2 text-gray-800">Cultural Organizations</h3>
            <p className="text-gray-700 mb-2">Groups celebrating diverse cultures and traditions through events and activities.</p>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Examples:</strong> Asian American Alliance, La Alianza Latinx, African Students Association</p>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-xl mb-2 text-gray-800">Activism & Service</h3>
            <p className="text-gray-700 mb-2">Organizations focused on social justice, community service, and political action.</p>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Examples:</strong> Oberlin Student Progressive Alliance, Environmental Action</p>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-xl mb-2 text-gray-800">Performing Arts Groups</h3>
            <p className="text-gray-700 mb-2">Student-led music, dance, and theater groups that host regular performances.</p>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Examples:</strong> OSteel, Oberlin College Choir, OCircus</p>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-xl mb-2 text-gray-800">Recreational & Special Interest</h3>
            <p className="text-gray-700 mb-2">Clubs based on hobbies, interests, and recreational activities.</p>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Examples:</strong> Gaming Club, Anime Club, Chess Club</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Lectures & Academic Events */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <FaGraduationCap className="text-red-700 mr-3 h-6 w-6" />
          <h2 className="text-2xl font-semibold text-gray-800">Lectures & Academic Events</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-xl mb-2 text-gray-800">Convocation Series</h3>
            <p className="text-gray-700 mb-2">Distinguished speakers from various fields addressing the Oberlin community.</p>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Venue:</strong> Finney Chapel</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Schedule:</strong> Monthly during academic year</p>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-xl mb-2 text-gray-800">Departmental Lectures</h3>
            <p className="text-gray-700 mb-2">Guest speakers hosted by academic departments on specialized topics.</p>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Venues:</strong> Varies by department</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Topics:</strong> Field-specific research and scholarship</p>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-xl mb-2 text-gray-800">Symposia & Conferences</h3>
            <p className="text-gray-700 mb-2">Multi-day events featuring presentations, discussions, and workshops.</p>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Examples:</strong> Environmental Studies Symposium, Digital Humanities Conference</p>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-xl mb-2 text-gray-800">Student Research Presentations</h3>
            <p className="text-gray-700 mb-2">Showcases of student research, including senior symposia and honors presentations.</p>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">When:</strong> Throughout academic year, with concentration in spring</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Athletics & Recreation */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <FaRunning className="text-red-700 mr-3 h-6 w-6" />
          <h2 className="text-2xl font-semibold text-gray-800">Athletics & Recreation</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-xl mb-2 text-gray-800">Varsity Athletic Events</h3>
            <p className="text-gray-700 mb-2">Home games and matches for Oberlin&apos;s NCAA Division III teams.</p>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Teams:</strong> Football, Basketball, Soccer, Swimming & Diving, and more</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Venues:</strong> Philips Gym, Bailey Field, others</p>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-xl mb-2 text-gray-800">Club Sports Competitions</h3>
            <p className="text-gray-700 mb-2">Events featuring Oberlin&apos;s club sports teams competing against other colleges.</p>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Teams:</strong> Ultimate Frisbee, Rugby, Fencing, and more</p>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-xl mb-2 text-gray-800">Intramural Sports</h3>
            <p className="text-gray-700 mb-2">Casual sports leagues for students to join and compete within Oberlin.</p>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Offerings:</strong> Basketball, Soccer, Volleyball, and more</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">How to Join:</strong> Sign up through Recreational Sports office</p>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-xl mb-2 text-gray-800">Fitness Classes</h3>
            <p className="text-gray-700 mb-2">Group fitness activities open to all students.</p>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Classes:</strong> Yoga, Zumba, Cycling, and more</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Venue:</strong> Philips Gym, Wellness Center</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Calendar Subscription */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">Stay Updated</h2>
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-gray-700 mb-6">
            Never miss an event! Subscribe to Oberlin&apos;s calendar or download the mobile app to 
            get the latest updates on campus events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-800 transition-colors">
              Subscribe to Calendar
            </button>
            <button className="border border-red-700 text-red-700 px-4 py-2 rounded-md hover:bg-red-50 transition-colors">
              Download Mobile App
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 