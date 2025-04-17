import { FaCalendarAlt, FaMusic, FaTheaterMasks, FaUsers, FaGraduationCap, FaRunning } from 'react-icons/fa';
import Link from 'next/link';

export default function EventsPage() {
  return (
    <div className="space-y-8">
      <header className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Campus Events</h1>
        <p className="text-xl text-gray-800 max-w-3xl mx-auto font-medium">
          Stay updated on lectures, performances, club activities, and more happening at Oberlin.
        </p>
      </header>
      
      {/* Upcoming Events */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <FaCalendarAlt className="text-red-700 mr-3 h-6 w-6" />
            <h2 className="text-2xl font-semibold">Upcoming Events</h2>
          </div>
          <Link href="/events/all" className="text-red-700 hover:underline font-medium">
            View All Events
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-lg mb-1">Oberlin Orchestra Concert</h3>
            <p className="text-sm text-gray-500 mb-2">Friday, Oct 15 • 8:00 PM • Finney Chapel</p>
            <p className="text-gray-800 mb-2 font-medium">The Oberlin Orchestra performs works by Beethoven, Brahms, and contemporary composers.</p>
            <p className="text-sm text-red-700 hover:underline cursor-pointer">Add to My Calendar</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-lg mb-1">Environmental Justice Panel</h3>
            <p className="text-sm text-gray-500 mb-2">Monday, Oct 18 • 4:30 PM • Nancy Schrom Dye Lecture Hall</p>
            <p className="text-gray-800 mb-2 font-medium">Panel discussion with environmental activists and scholars discussing local and global issues.</p>
            <p className="text-sm text-red-700 hover:underline cursor-pointer">Add to My Calendar</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-lg mb-1">Observatory Open House</h3>
            <p className="text-sm text-gray-500 mb-2">Wednesday, Oct 20 • 9:00 PM • Peters Hall Observatory</p>
            <p className="text-gray-800 mb-2 font-medium">View the night sky through Oberlin&apos;s telescopes with guidance from astronomy faculty.</p>
            <p className="text-sm text-red-700 hover:underline cursor-pointer">Add to My Calendar</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-lg mb-1">Fall Break Begins</h3>
            <p className="text-sm text-gray-500 mb-2">Saturday, Oct 23 • All Day</p>
            <p className="text-gray-800 mb-2 font-medium">No classes from October 23-31. Residence halls remain open. Some facilities have limited hours.</p>
            <p className="text-sm text-red-700 hover:underline cursor-pointer">Add to My Calendar</p>
          </div>
        </div>
      </section>
      
      {/* Music & Performances */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <FaMusic className="text-red-700 mr-3 h-6 w-6" />
          <h2 className="text-2xl font-semibold">Music & Performances</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-lg mb-2">Conservatory Concerts</h3>
            <p className="text-gray-600 mb-2">Regular performances by Oberlin Conservatory students and faculty.</p>
            <p className="text-sm"><strong>Venues:</strong> Warner Concert Hall, Kulas Recital Hall, Finney Chapel</p>
            <p className="text-sm"><strong>Ticket Info:</strong> Many performances are free; check the Conservatory calendar</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-lg mb-2">Artist Recital Series</h3>
            <p className="text-gray-600 mb-2">World-renowned artists and ensembles performing at Oberlin.</p>
            <p className="text-sm"><strong>Venue:</strong> Finney Chapel</p>
            <p className="text-sm"><strong>Ticket Info:</strong> Tickets available at Central Ticket Service</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-lg mb-2">Student Bands & Performances</h3>
            <p className="text-gray-600 mb-2">Showcases of student musical groups from various genres.</p>
            <p className="text-sm"><strong>Venues:</strong> Cat in the Cream, &apos;Sco, Dionysus Club</p>
            <p className="text-sm"><strong>Ticket Info:</strong> Varies by event, many are free or low-cost</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-lg mb-2">Dance Performances</h3>
            <p className="text-gray-600 mb-2">Showcases of choreography and dance by students and visiting artists.</p>
            <p className="text-sm"><strong>Venue:</strong> Warner Center for the Performing Arts</p>
            <p className="text-sm"><strong>Ticket Info:</strong> Available through Central Ticket Service</p>
          </div>
        </div>
      </section>
      
      {/* Theater & Arts */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <FaTheaterMasks className="text-red-700 mr-3 h-6 w-6" />
          <h2 className="text-2xl font-semibold">Theater & Arts</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-lg mb-2">Theater Department Productions</h3>
            <p className="text-gray-600 mb-2">Main stage productions by the Theater Department, featuring student actors and designers.</p>
            <p className="text-sm"><strong>Venues:</strong> Hall Auditorium, Little Theater</p>
            <p className="text-sm"><strong>Ticket Info:</strong> Central Ticket Service</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-lg mb-2">Student Theater Productions</h3>
            <p className="text-gray-600 mb-2">Independent productions by student theater groups.</p>
            <p className="text-sm"><strong>Venues:</strong> Little Theater, Kander Theater</p>
            <p className="text-sm"><strong>Groups:</strong> Oberlin Student Theater Association, Oberlin Musical Theater Association</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-lg mb-2">Art Exhibitions</h3>
            <p className="text-gray-600 mb-2">Rotating exhibitions at the Allen Memorial Art Museum and student galleries.</p>
            <p className="text-sm"><strong>Venues:</strong> Allen Memorial Art Museum, Fisher Gallery</p>
            <p className="text-sm"><strong>Hours:</strong> Varies by venue, check museum website</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-lg mb-2">Cinema Studies Screenings</h3>
            <p className="text-gray-600 mb-2">Film screenings and discussions by the Cinema Studies program.</p>
            <p className="text-sm"><strong>Venue:</strong> Apollo Theatre, classroom venues</p>
            <p className="text-sm"><strong>Ticket Info:</strong> Many screenings are free</p>
          </div>
        </div>
      </section>
      
      {/* Student Organizations */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <FaUsers className="text-red-700 mr-3 h-6 w-6" />
            <h2 className="text-2xl font-semibold">Student Organizations</h2>
          </div>
          <Link href="/organizations" className="text-red-700 hover:underline font-medium">
            View Complete List
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-lg mb-2">Cultural Organizations</h3>
            <p className="text-gray-600 mb-2">Groups celebrating diverse cultures and traditions through events and activities.</p>
            <p className="text-sm"><strong>Examples:</strong> Asian American Alliance, La Alianza Latinx, African Students Association</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-lg mb-2">Activism & Service</h3>
            <p className="text-gray-600 mb-2">Organizations focused on social justice, community service, and political action.</p>
            <p className="text-sm"><strong>Examples:</strong> Oberlin Student Progressive Alliance, Environmental Action</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-lg mb-2">Performing Arts Groups</h3>
            <p className="text-gray-600 mb-2">Student-led music, dance, and theater groups that host regular performances.</p>
            <p className="text-sm"><strong>Examples:</strong> OSteel, Oberlin College Choir, OCircus</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-lg mb-2">Recreational & Special Interest</h3>
            <p className="text-gray-600 mb-2">Clubs based on hobbies, interests, and recreational activities.</p>
            <p className="text-sm"><strong>Examples:</strong> Gaming Club, Anime Club, Chess Club</p>
          </div>
        </div>
      </section>
      
      {/* Lectures & Academic Events */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <FaGraduationCap className="text-red-700 mr-3 h-6 w-6" />
          <h2 className="text-2xl font-semibold">Lectures & Academic Events</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-lg mb-2">Convocation Series</h3>
            <p className="text-gray-600 mb-2">Distinguished speakers from various fields addressing the Oberlin community.</p>
            <p className="text-sm"><strong>Venue:</strong> Finney Chapel</p>
            <p className="text-sm"><strong>Schedule:</strong> Monthly during academic year</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-lg mb-2">Departmental Lectures</h3>
            <p className="text-gray-600 mb-2">Guest speakers hosted by academic departments on specialized topics.</p>
            <p className="text-sm"><strong>Venues:</strong> Varies by department</p>
            <p className="text-sm"><strong>Topics:</strong> Field-specific research and scholarship</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-lg mb-2">Symposia & Conferences</h3>
            <p className="text-gray-600 mb-2">Multi-day events featuring presentations, discussions, and workshops.</p>
            <p className="text-sm"><strong>Examples:</strong> Environmental Studies Symposium, Digital Humanities Conference</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-lg mb-2">Student Research Presentations</h3>
            <p className="text-gray-600 mb-2">Showcases of student research, including senior symposia and honors presentations.</p>
            <p className="text-sm"><strong>When:</strong> Throughout academic year, with concentration in spring</p>
          </div>
        </div>
      </section>
      
      {/* Athletics & Recreation */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <FaRunning className="text-red-700 mr-3 h-6 w-6" />
          <h2 className="text-2xl font-semibold">Athletics & Recreation</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-lg mb-2">Varsity Athletic Events</h3>
            <p className="text-gray-600 mb-2">Home games and matches for Oberlin&apos;s NCAA Division III teams.</p>
            <p className="text-sm"><strong>Teams:</strong> Football, Basketball, Soccer, Swimming & Diving, and more</p>
            <p className="text-sm"><strong>Venues:</strong> Philips Gym, Bailey Field, others</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-lg mb-2">Club Sports Competitions</h3>
            <p className="text-gray-600 mb-2">Events featuring Oberlin&apos;s club sports teams competing against other colleges.</p>
            <p className="text-sm"><strong>Teams:</strong> Ultimate Frisbee, Rugby, Fencing, and more</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-lg mb-2">Intramural Sports</h3>
            <p className="text-gray-600 mb-2">Casual sports leagues for students to join and compete within Oberlin.</p>
            <p className="text-sm"><strong>Offerings:</strong> Basketball, Soccer, Volleyball, and more</p>
            <p className="text-sm"><strong>How to Join:</strong> Sign up through Recreational Sports office</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-lg mb-2">Fitness Classes</h3>
            <p className="text-gray-600 mb-2">Group fitness activities open to all students.</p>
            <p className="text-sm"><strong>Classes:</strong> Yoga, Zumba, Cycling, and more</p>
            <p className="text-sm"><strong>Venue:</strong> Philips Gym, Wellness Center</p>
          </div>
        </div>
      </section>
      
      {/* Calendar Subscription */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Stay Updated</h2>
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