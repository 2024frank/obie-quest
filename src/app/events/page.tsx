'use client';

import { useState } from 'react';
import { FaCalendarAlt, FaMusic, FaTheaterMasks, FaGraduationCap, FaCalendarPlus, FaShare, FaFilter, FaPlus } from 'react-icons/fa';
import { useChecklistStore, ChecklistCategory, YearLevel } from '@/stores/useChecklistStore';

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
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('This feature is coming soon. Please check back later!');
  const [showEditModal, setShowEditModal] = useState(false);
  const [editItem, setEditItem] = useState({
    title: '',
    description: '',
    category: 'academic' as ChecklistCategory,
    yearLevel: 'freshman' as YearLevel
  });
  
  const addItem = useChecklistStore(state => state.addItem);
  
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
  
  // Function to prepare edit modal for an event
  const prepareAddToChecklist = (title: string, description: string, category: string) => {
    // Convert event category to checklist category
    const categoryMap: Record<string, ChecklistCategory> = {
      'conservatory': 'social',
      'artsdept': 'social',
      'academics': 'academic',
      'athletics': 'campus',
      'studentlife': 'social'
    };
    
    setEditItem({
      title: `Attend ${title}`,
      description: description,
      category: categoryMap[category] || 'social',
      yearLevel: 'freshman'
    });
    
    setShowEditModal(true);
  };
  
  // Function to add edited item to checklist
  const handleAddEditedItem = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editItem.title.trim() === '') return;
    
    addItem({
      title: editItem.title,
      description: editItem.description,
      category: editItem.category,
      yearLevel: editItem.yearLevel
    });
    
    setShowEditModal(false);
    setPopupMessage('Added to your checklist!');
    setShowPopup(true);
    
    // Reset popup message after a delay
    setTimeout(() => {
      setPopupMessage('This feature is coming soon. Please check back later!');
    }, 2000);
  };
  
  return (
    <div className="space-y-8">
      {/* Under Construction Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full text-center">
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              {popupMessage === 'Added to your checklist!' ? 'Success!' : 'Under Construction'}
            </h3>
            <p className="text-gray-700 mb-6">{popupMessage}</p>
            <button
              className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800 transition-colors font-medium"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
      
      {/* Edit Checklist Item Modal */}
      {showEditModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New Checklist Item</h2>
            
            <form onSubmit={handleAddEditedItem}>
              <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  Title*
                </label>
                <input
                  type="text"
                  id="title"
                  value={editItem.title}
                  onChange={(e) => setEditItem({ ...editItem, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white text-gray-900"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  id="description"
                  value={editItem.description}
                  onChange={(e) => setEditItem({ ...editItem, description: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white text-gray-900"
                  rows={3}
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <select
                    id="category"
                    value={editItem.category}
                    onChange={(e) => setEditItem({ ...editItem, category: e.target.value as ChecklistCategory })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white text-gray-900"
                  >
                    <option value="academic">Academic</option>
                    <option value="social">Social</option>
                    <option value="career">Career</option>
                    <option value="campus">Campus</option>
                    <option value="downtown">Downtown</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="yearLevel" className="block text-sm font-medium text-gray-700 mb-1">
                    Year
                  </label>
                  <select
                    id="yearLevel"
                    value={editItem.yearLevel}
                    onChange={(e) => setEditItem({ ...editItem, yearLevel: e.target.value as YearLevel })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white text-gray-900"
                  >
                    <option value="freshman">Freshman</option>
                    <option value="sophomore">Sophomore</option>
                    <option value="junior">Junior</option>
                    <option value="senior">Senior</option>
                  </select>
                </div>
              </div>
              
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowEditModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-red-700 border border-transparent rounded-md text-white hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  Add Item
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
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
                      <button className="text-red-700 hover:text-red-800" onClick={() => setShowPopup(true)}>
                        <FaCalendarPlus className="h-5 w-5" title="Add to calendar" />
                      </button>
                      <button className="text-red-700 hover:text-red-800" onClick={() => setShowPopup(true)}>
                        <FaShare className="h-5 w-5" title="Share event" />
                      </button>
                      <button 
                        className="bg-red-100 text-red-700 hover:bg-red-200 rounded-full p-1.5"
                        onClick={() => prepareAddToChecklist(event.title, event.description, event.category)}
                        title="Add to checklist"
                      >
                        <FaPlus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <button 
                    onClick={() => setShowPopup(true)}
                    className="text-red-700 hover:underline text-sm font-medium bg-transparent border-0 cursor-pointer p-0"
                  >
                    View details
                  </button>
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
            <div className="flex justify-between">
              <h3 className="font-medium text-xl mb-2 text-gray-800">Conservatory Concerts</h3>
              <button 
                className="bg-red-100 text-red-700 hover:bg-red-200 rounded-full p-1.5"
                onClick={() => prepareAddToChecklist("Conservatory Concert", "Attend a performance by Oberlin Conservatory students and faculty", "conservatory")}
                title="Add to checklist"
              >
                <FaPlus className="h-4 w-4" />
              </button>
            </div>
            <p className="text-gray-700 mb-2">Regular performances by Oberlin Conservatory students and faculty.</p>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Venues:</strong> Warner Concert Hall, Kulas Recital Hall, Finney Chapel</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Ticket Info:</strong> Many performances are free; check the Conservatory calendar</p>
            </div>
            <button 
              onClick={() => setShowPopup(true)}
              className="mt-2 text-red-700 hover:underline text-sm font-medium bg-transparent border-0 cursor-pointer p-0"
            >
              View details
            </button>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <div className="flex justify-between">
              <h3 className="font-medium text-xl mb-2 text-gray-800">Artist Recital Series</h3>
              <button 
                className="bg-red-100 text-red-700 hover:bg-red-200 rounded-full p-1.5"
                onClick={() => prepareAddToChecklist("Artist Recital Series", "Attend a performance by world-renowned artists and ensembles", "conservatory")}
                title="Add to checklist"
              >
                <FaPlus className="h-4 w-4" />
              </button>
            </div>
            <p className="text-gray-700 mb-2">World-renowned artists and ensembles performing at Oberlin.</p>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Venue:</strong> Finney Chapel</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Ticket Info:</strong> Tickets available at Central Ticket Service</p>
            </div>
            <button 
              onClick={() => setShowPopup(true)}
              className="mt-2 text-red-700 hover:underline text-sm font-medium bg-transparent border-0 cursor-pointer p-0"
            >
              View details
            </button>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <div className="flex justify-between">
              <h3 className="font-medium text-xl mb-2 text-gray-800">Student Bands & Performances</h3>
              <button 
                className="bg-red-100 text-red-700 hover:bg-red-200 rounded-full p-1.5"
                onClick={() => prepareAddToChecklist("Student Band Performance", "Attend a showcase featuring student musical groups", "studentlife")}
                title="Add to checklist"
              >
                <FaPlus className="h-4 w-4" />
              </button>
            </div>
            <p className="text-gray-700 mb-2">Showcases of student musical groups from various genres.</p>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Venues:</strong> Cat in the Cream, &apos;Sco, Dionysus Club</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Ticket Info:</strong> Varies by event, many are free or low-cost</p>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <div className="flex justify-between">
              <h3 className="font-medium text-xl mb-2 text-gray-800">Dance Performances</h3>
              <button 
                className="bg-red-100 text-red-700 hover:bg-red-200 rounded-full p-1.5"
                onClick={() => prepareAddToChecklist("Dance Performance", "Attend a dance showcase featuring students and visiting artists", "artsdept")}
                title="Add to checklist"
              >
                <FaPlus className="h-4 w-4" />
              </button>
            </div>
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
            <div className="flex justify-between">
              <h3 className="font-medium text-xl mb-2 text-gray-800">Theater Department Productions</h3>
              <button 
                className="bg-red-100 text-red-700 hover:bg-red-200 rounded-full p-1.5"
                onClick={() => prepareAddToChecklist("Theater Department Production", "Attend a student or faculty theater production", "artsdept")}
                title="Add to checklist"
              >
                <FaPlus className="h-4 w-4" />
              </button>
            </div>
            <p className="text-gray-700 mb-2">Student and faculty productions throughout the academic year.</p>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Venues:</strong> Hall Auditorium, Little Theater</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Ticket Info:</strong> Tickets available at Central Ticket Service</p>
            </div>
            <button 
              onClick={() => setShowPopup(true)}
              className="mt-2 text-red-700 hover:underline text-sm font-medium bg-transparent border-0 cursor-pointer p-0"
            >
              View details
            </button>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <div className="flex justify-between">
              <h3 className="font-medium text-xl mb-2 text-gray-800">Student Theater Productions</h3>
              <button 
                className="bg-red-100 text-red-700 hover:bg-red-200 rounded-full p-1.5"
                onClick={() => prepareAddToChecklist("Student Theater Production", "Attend an independent production by a student theater group", "studentlife")}
                title="Add to checklist"
              >
                <FaPlus className="h-4 w-4" />
              </button>
            </div>
            <p className="text-gray-700 mb-2">Independent productions by student theater groups.</p>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Venues:</strong> Little Theater, Kander Theater</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Groups:</strong> Oberlin Student Theater Association, Oberlin Musical Theater Association</p>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <div className="flex justify-between">
              <h3 className="font-medium text-xl mb-2 text-gray-800">Art Exhibitions</h3>
              <button 
                className="bg-red-100 text-red-700 hover:bg-red-200 rounded-full p-1.5"
                onClick={() => prepareAddToChecklist("Art Exhibition", "Visit an art exhibition at a campus gallery", "artsdept")}
                title="Add to checklist"
              >
                <FaPlus className="h-4 w-4" />
              </button>
            </div>
            <p className="text-gray-700 mb-2">Rotating exhibitions at the Allen Memorial Art Museum and student galleries.</p>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Venues:</strong> Allen Memorial Art Museum, Fisher Gallery</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Hours:</strong> Varies by venue, check museum website</p>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <div className="flex justify-between">
              <h3 className="font-medium text-xl mb-2 text-gray-800">Cinema Studies Screenings</h3>
              <button 
                className="bg-red-100 text-red-700 hover:bg-red-200 rounded-full p-1.5"
                onClick={() => prepareAddToChecklist("Cinema Studies Screening", "Attend a film screening and discussion", "academics")}
                title="Add to checklist"
              >
                <FaPlus className="h-4 w-4" />
              </button>
            </div>
            <p className="text-gray-700 mb-2">Regular film screenings, often followed by discussions.</p>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Venue:</strong> Apollo Theatre, Adam Joseph Lewis Center</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Ticket Info:</strong> Many screenings are free with OCID</p>
            </div>
            <button 
              onClick={() => setShowPopup(true)}
              className="mt-2 text-red-700 hover:underline text-sm font-medium bg-transparent border-0 cursor-pointer p-0"
            >
              View details
            </button>
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
            <div className="flex justify-between">
              <h3 className="font-medium text-xl mb-2 text-gray-800">Convocation Series</h3>
              <button 
                className="bg-red-100 text-red-700 hover:bg-red-200 rounded-full p-1.5"
                onClick={() => prepareAddToChecklist("Convocation Series", "Attend a talk by a distinguished speaker in the convocation series", "academics")}
                title="Add to checklist"
              >
                <FaPlus className="h-4 w-4" />
              </button>
            </div>
            <p className="text-gray-700 mb-2">Distinguished speakers from various fields addressing the Oberlin community.</p>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Venue:</strong> Finney Chapel</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Schedule:</strong> Monthly during academic year</p>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <div className="flex justify-between">
              <h3 className="font-medium text-xl mb-2 text-gray-800">Departmental Lectures</h3>
              <button 
                className="bg-red-100 text-red-700 hover:bg-red-200 rounded-full p-1.5"
                onClick={() => prepareAddToChecklist("Departmental Lecture", "Attend an academic lecture hosted by a department", "academics")}
                title="Add to checklist"
              >
                <FaPlus className="h-4 w-4" />
              </button>
            </div>
            <p className="text-gray-700 mb-2">Guest speakers hosted by academic departments on specialized topics.</p>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Venues:</strong> Varies by department</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Topics:</strong> Field-specific research and scholarship</p>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <div className="flex justify-between">
              <h3 className="font-medium text-xl mb-2 text-gray-800">Symposia & Conferences</h3>
              <button 
                className="bg-red-100 text-red-700 hover:bg-red-200 rounded-full p-1.5"
                onClick={() => prepareAddToChecklist("Academic Symposium", "Attend an academic symposium or conference", "academics")}
                title="Add to checklist"
              >
                <FaPlus className="h-4 w-4" />
              </button>
            </div>
            <p className="text-gray-700 mb-2">Multi-day events featuring presentations, discussions, and workshops.</p>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Examples:</strong> Environmental Studies Symposium, Digital Humanities Conference</p>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <div className="flex justify-between">
              <h3 className="font-medium text-xl mb-2 text-gray-800">Student Research Presentations</h3>
              <button 
                className="bg-red-100 text-red-700 hover:bg-red-200 rounded-full p-1.5"
                onClick={() => prepareAddToChecklist("Student Research Presentation", "Attend a showcase of student research projects", "academics")}
                title="Add to checklist"
              >
                <FaPlus className="h-4 w-4" />
              </button>
            </div>
            <p className="text-gray-700 mb-2">Showcases of student research, including senior symposia and honors presentations.</p>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">When:</strong> Throughout academic year, with concentration in spring</p>
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
            <button className="bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-800 transition-colors" onClick={() => setShowPopup(true)}>
              Subscribe to Calendar
            </button>
            <button className="border border-red-700 text-red-700 px-4 py-2 rounded-md hover:bg-red-50 transition-colors" onClick={() => setShowPopup(true)}>
              Download Mobile App
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 