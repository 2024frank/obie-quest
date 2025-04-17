'use client';

import { FaUsers, FaMusic, FaVolleyballBall, FaNewspaper, FaGlobeAmericas } from 'react-icons/fa';

export default function OrganizationsPage() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Student Organizations</h1>
        <p className="text-xl font-bold text-gray-700 max-w-3xl mx-auto">
          Explore the diverse range of student organizations at Oberlin College. Get involved, find your community, and pursue your interests.
        </p>
      </header>

      {/* Cultural Organizations */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <FaGlobeAmericas className="text-red-700 mr-3 h-6 w-6" />
          <h2 className="text-2xl font-semibold">Cultural Organizations</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-lg mb-2">Asian American Alliance</h3>
            <p className="text-gray-600 mb-2">A community for Asian and Asian American students to connect, share experiences, and promote cultural awareness.</p>
            <p className="text-sm"><strong>Meetings:</strong> Wednesdays, 7:00 PM</p>
            <p className="text-sm"><strong>Location:</strong> Wilder Hall, Room 215</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-lg mb-2">La Alianza Latinx</h3>
            <p className="text-gray-600 mb-2">Supporting Latinx students and promoting Latin American culture through events and discussions.</p>
            <p className="text-sm"><strong>Meetings:</strong> Mondays, 8:00 PM</p>
            <p className="text-sm"><strong>Location:</strong> King Building, Room 106</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-lg mb-2">African Students Association</h3>
            <p className="text-gray-600 mb-2">Celebrating African cultures and creating community for students from African countries and diaspora.</p>
            <p className="text-sm"><strong>Meetings:</strong> Fridays, 6:30 PM</p>
            <p className="text-sm"><strong>Location:</strong> Wilder Hall, Room 112</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-lg mb-2">Black Student Alliance</h3>
            <p className="text-gray-600 mb-2">Advocating for Black student interests and organizing cultural events and educational programs.</p>
            <p className="text-sm"><strong>Meetings:</strong> Tuesdays, 7:00 PM</p>
            <p className="text-sm"><strong>Location:</strong> Afrikan Heritage House</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-lg mb-2">South Asian Students Association</h3>
            <p className="text-gray-600 mb-2">Promoting awareness of South Asian cultures through events, discussions, and celebrations.</p>
            <p className="text-sm"><strong>Meetings:</strong> Thursdays, 8:00 PM</p>
            <p className="text-sm"><strong>Location:</strong> King Building, Room 201</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-lg mb-2">Indigenous Students Association</h3>
            <p className="text-gray-600 mb-2">Creating community for Indigenous students and raising awareness about Indigenous issues.</p>
            <p className="text-sm"><strong>Meetings:</strong> Bi-weekly, Sundays at 5:00 PM</p>
            <p className="text-sm"><strong>Location:</strong> Wilder Hall, Room 112</p>
          </div>
        </div>
      </section>

      {/* Performing Arts Organizations */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <FaMusic className="text-red-700 mr-3 h-6 w-6" />
          <h2 className="text-2xl font-semibold">Performing Arts Organizations</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-lg mb-2">OSteel</h3>
            <p className="text-gray-600 mb-2">Steel drum band performing Caribbean-inspired music at campus events.</p>
            <p className="text-sm"><strong>Rehearsals:</strong> Tuesdays and Thursdays, 7:00-9:00 PM</p>
            <p className="text-sm"><strong>Location:</strong> Wilder Main</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-lg mb-2">OCircus</h3>
            <p className="text-gray-600 mb-2">Student circus arts group performing acrobatics, juggling, aerial arts, and more.</p>
            <p className="text-sm"><strong>Practices:</strong> Multiple times weekly</p>
            <p className="text-sm"><strong>Location:</strong> Hales Gymnasium</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-lg mb-2">Obertones</h3>
            <p className="text-gray-600 mb-2">All-male a cappella group performing contemporary and classical music.</p>
            <p className="text-sm"><strong>Rehearsals:</strong> Mon/Wed/Fri, 10:00 PM</p>
            <p className="text-sm"><strong>Auditions:</strong> Beginning of each semester</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-lg mb-2">Oberlin Dance Company</h3>
            <p className="text-gray-600 mb-2">Student-run dance collective presenting original choreography in various styles.</p>
            <p className="text-sm"><strong>Rehearsals:</strong> Varies by production</p>
            <p className="text-sm"><strong>Performances:</strong> Warner Main Space</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-lg mb-2">Nothing But Treble</h3>
            <p className="text-gray-600 mb-2">Treble-voice a cappella group with a diverse repertoire of music.</p>
            <p className="text-sm"><strong>Rehearsals:</strong> Tue/Thu/Sun evenings</p>
            <p className="text-sm"><strong>Contact:</strong> nbtreble@oberlin.edu</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-lg mb-2">Oberlin Student Theater Association</h3>
            <p className="text-gray-600 mb-2">Student-run group producing full-length plays and supporting student theater initiatives.</p>
            <p className="text-sm"><strong>Meetings:</strong> Weekly, time varies</p>
            <p className="text-sm"><strong>Productions:</strong> Multiple per semester</p>
          </div>
        </div>
      </section>

      {/* Activism & Service Organizations */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <FaUsers className="text-red-700 mr-3 h-6 w-6" />
          <h2 className="text-2xl font-semibold">Activism & Service Organizations</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-lg mb-2">Oberlin Student Progressive Alliance</h3>
            <p className="text-gray-600 mb-2">Coalition of students advocating for progressive political change on campus and beyond.</p>
            <p className="text-sm"><strong>Meetings:</strong> Sundays, 7:00 PM</p>
            <p className="text-sm"><strong>Location:</strong> Wilder Hall</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-lg mb-2">Environmental Action</h3>
            <p className="text-gray-600 mb-2">Student group focused on campus sustainability and environmental justice issues.</p>
            <p className="text-sm"><strong>Meetings:</strong> Wednesdays, 8:00 PM</p>
            <p className="text-sm"><strong>Location:</strong> Adam Joseph Lewis Center</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-lg mb-2">Oberlin Animal Rights</h3>
            <p className="text-gray-600 mb-2">Advocating for animal welfare and promoting veganism and plant-based diets.</p>
            <p className="text-sm"><strong>Meetings:</strong> Mondays, 7:00 PM</p>
            <p className="text-sm"><strong>Location:</strong> King Building, Room 102</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-lg mb-2">Oberlin Civic Engagement</h3>
            <p className="text-gray-600 mb-2">Connecting students with volunteer opportunities in the local community.</p>
            <p className="text-sm"><strong>Office:</strong> Bonner Center for Service and Learning</p>
            <p className="text-sm"><strong>Weekly Hours:</strong> M-F, 9:00 AM - 5:00 PM</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-lg mb-2">Oberlin Students for Gender Inclusivity</h3>
            <p className="text-gray-600 mb-2">Advocating for gender-inclusive policies and supporting LGBTQ+ students.</p>
            <p className="text-sm"><strong>Meetings:</strong> Thursdays, 7:30 PM</p>
            <p className="text-sm"><strong>Location:</strong> Multicultural Resource Center</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-lg mb-2">Students for a Free Palestine</h3>
            <p className="text-gray-600 mb-2">Raising awareness about Palestinian rights and promoting education on the conflict.</p>
            <p className="text-sm"><strong>Meetings:</strong> Tuesdays, 8:00 PM</p>
            <p className="text-sm"><strong>Location:</strong> King Building, Room 239</p>
          </div>
        </div>
      </section>

      {/* Publications & Media */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <FaNewspaper className="text-red-700 mr-3 h-6 w-6" />
          <h2 className="text-2xl font-semibold">Publications & Media</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-lg mb-2">The Oberlin Review</h3>
            <p className="text-gray-600 mb-2">Student-run weekly newspaper covering campus news, events, and opinions.</p>
            <p className="text-sm"><strong>Office:</strong> Burton Basement</p>
            <p className="text-sm"><strong>Publication:</strong> Fridays during academic year</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-lg mb-2">WOBC 91.5 FM</h3>
            <p className="text-gray-600 mb-2">Student-run college radio station featuring diverse programming and music.</p>
            <p className="text-sm"><strong>Studio:</strong> Wilder Hall, Third Floor</p>
            <p className="text-sm"><strong>Broadcasting:</strong> 24/7 during academic year</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-lg mb-2">Oberlin Film Series</h3>
            <p className="text-gray-600 mb-2">Student organization screening films and hosting discussions about cinema.</p>
            <p className="text-sm"><strong>Screenings:</strong> Weekends during semester</p>
            <p className="text-sm"><strong>Location:</strong> Apollo Theatre or classroom venues</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-lg mb-2">WRCS (Web Radio Communications at Oberlin)</h3>
            <p className="text-gray-600 mb-2">Internet radio station featuring podcast-style programming and music.</p>
            <p className="text-sm"><strong>Studio:</strong> TIMARA department</p>
            <p className="text-sm"><strong>Website:</strong> wrcs.oberlin.edu</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-lg mb-2">The Grape</h3>
            <p className="text-gray-600 mb-2">Alternative student publication focused on arts, culture, and campus life.</p>
            <p className="text-sm"><strong>Publication:</strong> Bi-weekly</p>
            <p className="text-sm"><strong>Email:</strong> thegrape@oberlin.edu</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-lg mb-2">Plum Creek Review</h3>
            <p className="text-gray-600 mb-2">Literary magazine publishing student poetry, prose, and visual art.</p>
            <p className="text-sm"><strong>Submissions:</strong> Twice per academic year</p>
            <p className="text-sm"><strong>Publication:</strong> End of each semester</p>
          </div>
        </div>
      </section>

      {/* Recreational & Special Interest */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <FaVolleyballBall className="text-red-700 mr-3 h-6 w-6" />
          <h2 className="text-2xl font-semibold">Recreational & Special Interest</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-lg mb-2">Oberlin Board Game Club</h3>
            <p className="text-gray-600 mb-2">Weekly gatherings to play board games, card games, and tabletop RPGs.</p>
            <p className="text-sm"><strong>Meetings:</strong> Saturdays, 7:00 PM</p>
            <p className="text-sm"><strong>Location:</strong> Wilder Hall, Room 112</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-lg mb-2">Oberlin Chess Club</h3>
            <p className="text-gray-600 mb-2">Group for chess enthusiasts of all skill levels to play and improve.</p>
            <p className="text-sm"><strong>Meetings:</strong> Tuesdays, 7:00 PM</p>
            <p className="text-sm"><strong>Location:</strong> Science Center, Second Floor</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-lg mb-2">Oberlin Cycling Club</h3>
            <p className="text-gray-600 mb-2">Group rides, bike maintenance workshops, and cycling advocacy.</p>
            <p className="text-sm"><strong>Rides:</strong> Weekends, weather permitting</p>
            <p className="text-sm"><strong>Workshop:</strong> Bike Co-op behind Keep Cottage</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-lg mb-2">Oberlin Anime Club</h3>
            <p className="text-gray-600 mb-2">Screenings and discussions of Japanese animation and manga.</p>
            <p className="text-sm"><strong>Meetings:</strong> Fridays, 8:00 PM</p>
            <p className="text-sm"><strong>Location:</strong> King Building, Room 106</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-lg mb-2">Oberlin Climbing Club</h3>
            <p className="text-gray-600 mb-2">Indoor and outdoor climbing trips and skill development for all levels.</p>
            <p className="text-sm"><strong>Indoor Sessions:</strong> Philips Gym climbing wall</p>
            <p className="text-sm"><strong>Trips:</strong> Several times per semester</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-lg mb-2">The Oberlin Student Cooperative Association</h3>
            <p className="text-gray-600 mb-2">Student-run housing and dining cooperatives focused on community living.</p>
            <p className="text-sm"><strong>Office:</strong> OSCA Office, Wilder Hall</p>
            <p className="text-sm"><strong>Coops:</strong> Multiple houses and dining facilities</p>
          </div>
        </div>
      </section>
    </div>
  );
} 