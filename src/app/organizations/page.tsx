'use client';

import { FaUsers, FaMusic, FaVolleyballBall, FaNewspaper, FaGlobeAmericas, FaPlus } from 'react-icons/fa';
import { useState } from 'react';
import { useChecklistStore, ChecklistCategory, YearLevel } from '@/stores/useChecklistStore';

const yearLevels: YearLevel[] = ['freshman', 'sophomore', 'junior', 'senior'];
const categories: { label: string; value: ChecklistCategory }[] = [
  { label: 'Academic', value: 'academic' },
  { label: 'Social', value: 'social' },
  { label: 'Career', value: 'career' },
  { label: 'Campus', value: 'campus' },
  { label: 'Downtown', value: 'downtown' },
];

export default function OrganizationsPage() {
  const addItem = useChecklistStore((s) => s.addItem);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalDescription, setModalDescription] = useState('');
  const [modalCategory, setModalCategory] = useState<ChecklistCategory>('social');
  const [modalYear, setModalYear] = useState<YearLevel>('freshman');

  function openModal(title: string, description: string) {
    setModalTitle(`Join ${title}`);
    setModalDescription(description);
    setModalCategory('social');
    setModalYear('freshman');
    setModalOpen(true);
  }

  function handleSave() {
    addItem({
      title: modalTitle,
      description: modalDescription,
      category: modalCategory,
      yearLevel: modalYear,
    });
    setModalOpen(false);
  }

  return (
    <div className="space-y-8 max-w-7xl mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Student Organizations</h1>
        <p className="text-xl font-bold text-gray-700 max-w-3xl mx-auto">
          Explore the diverse range of student organizations at Oberlin College. Get involved, find your community, and pursue your interests.
        </p>
      </header>

      {/* Official Resources Link */}
      <section className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Looking for more student organizations?</h2>
            <p className="text-gray-700">
              Visit the official Oberlin College website for a complete directory of all registered student organizations, 
              including contact information and how to join.
            </p>
          </div>
          <a 
            href="https://www.oberlin.edu/life-at-oberlin/clubs-organizations" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-red-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-800 transition-colors flex-shrink-0"
          >
            Official Directory &rarr;
          </a>
        </div>
      </section>

      {/* Cultural Organizations */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <FaGlobeAmericas className="text-red-700 mr-3 h-6 w-6" />
          <h2 className="text-2xl font-semibold text-gray-800">Cultural Organizations</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-xl text-gray-800">Asian American Alliance</h3>
              <button className="ml-2 p-1 rounded-full bg-red-100 hover:bg-red-200 text-red-700" title="Add to Checklist" onClick={() => openModal('Asian American Alliance', 'A community for Asian and Asian American students to connect, share experiences, and promote cultural awareness.')}> <FaPlus /> </button>
            </div>
            <p className="text-gray-600 mb-2">A community for Asian and Asian American students to connect, share experiences, and promote cultural awareness.</p>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Meetings:</strong> Wednesdays, 7:00 PM</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Location:</strong> Wilder Hall, Room 215</p>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-xl text-gray-800">La Alianza Latinx</h3>
              <button className="ml-2 p-1 rounded-full bg-red-100 hover:bg-red-200 text-red-700" title="Add to Checklist" onClick={() => openModal('La Alianza Latinx', 'Supporting Latinx students and promoting Latin American culture through events and discussions.')}> <FaPlus /> </button>
            </div>
            <p className="text-gray-600 mb-2">Supporting Latinx students and promoting Latin American culture through events and discussions.</p>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Meetings:</strong> Mondays, 8:00 PM</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Location:</strong> King Building, Room 106</p>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-xl text-gray-800">African Students Association</h3>
              <button className="ml-2 p-1 rounded-full bg-red-100 hover:bg-red-200 text-red-700" title="Add to Checklist" onClick={() => openModal('African Students Association', 'Celebrating African cultures and creating community for students from African countries and diaspora.')}> <FaPlus /> </button>
            </div>
            <p className="text-gray-600 mb-2">Celebrating African cultures and creating community for students from African countries and diaspora.</p>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Meetings:</strong> Fridays, 6:30 PM</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Location:</strong> Wilder Hall, Room 112</p>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-xl text-gray-800">Black Student Alliance</h3>
              <button className="ml-2 p-1 rounded-full bg-red-100 hover:bg-red-200 text-red-700" title="Add to Checklist" onClick={() => openModal('Black Student Alliance', 'Advocating for Black student interests and organizing cultural events and educational programs.')}> <FaPlus /> </button>
            </div>
            <p className="text-gray-600 mb-2">Advocating for Black student interests and organizing cultural events and educational programs.</p>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Meetings:</strong> Tuesdays, 7:00 PM</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Location:</strong> Afrikan Heritage House</p>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-xl text-gray-800">South Asian Students Association</h3>
              <button className="ml-2 p-1 rounded-full bg-red-100 hover:bg-red-200 text-red-700" title="Add to Checklist" onClick={() => openModal('South Asian Students Association', 'Promoting awareness of South Asian cultures through events, discussions, and celebrations.')}> <FaPlus /> </button>
            </div>
            <p className="text-gray-600 mb-2">Promoting awareness of South Asian cultures through events, discussions, and celebrations.</p>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Meetings:</strong> Thursdays, 8:00 PM</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Location:</strong> King Building, Room 201</p>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-xl text-gray-800">Indigenous Students Association</h3>
              <button className="ml-2 p-1 rounded-full bg-red-100 hover:bg-red-200 text-red-700" title="Add to Checklist" onClick={() => openModal('Indigenous Students Association', 'Creating community for Indigenous students and raising awareness about Indigenous issues.')}> <FaPlus /> </button>
            </div>
            <p className="text-gray-600 mb-2">Creating community for Indigenous students and raising awareness about Indigenous issues.</p>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Meetings:</strong> Bi-weekly, Sundays at 5:00 PM</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Location:</strong> Wilder Hall, Room 112</p>
            </div>
          </div>
        </div>
      </section>

      {/* Performing Arts Organizations */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <FaMusic className="text-red-700 mr-3 h-6 w-6" />
          <h2 className="text-2xl font-semibold text-gray-800">Performing Arts Organizations</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-xl text-gray-800">OSteel</h3>
              <button className="ml-2 p-1 rounded-full bg-red-100 hover:bg-red-200 text-red-700" title="Add to Checklist" onClick={() => openModal('OSteel', 'Steel drum band performing Caribbean-inspired music at campus events.')}> <FaPlus /> </button>
            </div>
            <p className="text-gray-600 mb-2">Steel drum band performing Caribbean-inspired music at campus events.</p>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Rehearsals:</strong> Tuesdays and Thursdays, 7:00-9:00 PM</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Location:</strong> Wilder Main</p>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-xl text-gray-800">OCircus</h3>
              <button className="ml-2 p-1 rounded-full bg-red-100 hover:bg-red-200 text-red-700" title="Add to Checklist" onClick={() => openModal('OCircus', 'Student circus arts group performing acrobatics, juggling, aerial arts, and more.')}> <FaPlus /> </button>
            </div>
            <p className="text-gray-600 mb-2">Student circus arts group performing acrobatics, juggling, aerial arts, and more.</p>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Practices:</strong> Multiple times weekly</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Location:</strong> Hales Gymnasium</p>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-xl text-gray-800">Obertones</h3>
              <button className="ml-2 p-1 rounded-full bg-red-100 hover:bg-red-200 text-red-700" title="Add to Checklist" onClick={() => openModal('Obertones', 'All-male a cappella group performing contemporary and classical music.')}> <FaPlus /> </button>
            </div>
            <p className="text-gray-600 mb-2">All-male a cappella group performing contemporary and classical music.</p>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Rehearsals:</strong> Mon/Wed/Fri, 10:00 PM</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Auditions:</strong> Beginning of each semester</p>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-xl text-gray-800">Oberlin Dance Company</h3>
              <button className="ml-2 p-1 rounded-full bg-red-100 hover:bg-red-200 text-red-700" title="Add to Checklist" onClick={() => openModal('Oberlin Dance Company', 'Student-run dance collective presenting original choreography in various styles.')}> <FaPlus /> </button>
            </div>
            <p className="text-gray-600 mb-2">Student-run dance collective presenting original choreography in various styles.</p>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Rehearsals:</strong> Varies by production</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Performances:</strong> Warner Main Space</p>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-xl text-gray-800">Nothing But Treble</h3>
              <button className="ml-2 p-1 rounded-full bg-red-100 hover:bg-red-200 text-red-700" title="Add to Checklist" onClick={() => openModal('Nothing But Treble', 'Treble-voice a cappella group with a diverse repertoire of music.')}> <FaPlus /> </button>
            </div>
            <p className="text-gray-600 mb-2">Treble-voice a cappella group with a diverse repertoire of music.</p>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Rehearsals:</strong> Tue/Thu/Sun evenings</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Contact:</strong> nbtreble@oberlin.edu</p>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-xl text-gray-800">Oberlin Student Theater Association</h3>
              <button className="ml-2 p-1 rounded-full bg-red-100 hover:bg-red-200 text-red-700" title="Add to Checklist" onClick={() => openModal('Oberlin Student Theater Association', 'Student-run group producing full-length plays and supporting student theater initiatives.')}> <FaPlus /> </button>
            </div>
            <p className="text-gray-600 mb-2">Student-run group producing full-length plays and supporting student theater initiatives.</p>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Meetings:</strong> Weekly, time varies</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Productions:</strong> Multiple per semester</p>
            </div>
          </div>
        </div>
      </section>

      {/* Activism & Service Organizations */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <FaUsers className="text-red-700 mr-3 h-6 w-6" />
          <h2 className="text-2xl font-semibold text-gray-800">Activism & Service Organizations</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-xl text-gray-800">Oberlin Student Progressive Alliance</h3>
              <button className="ml-2 p-1 rounded-full bg-red-100 hover:bg-red-200 text-red-700" title="Add to Checklist" onClick={() => openModal('Oberlin Student Progressive Alliance', 'Coalition of students advocating for progressive political change on campus and beyond.')}> <FaPlus /> </button>
            </div>
            <p className="text-gray-600 mb-2">Coalition of students advocating for progressive political change on campus and beyond.</p>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Meetings:</strong> Sundays, 7:00 PM</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Location:</strong> Wilder Hall</p>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-xl text-gray-800">Environmental Action</h3>
              <button className="ml-2 p-1 rounded-full bg-red-100 hover:bg-red-200 text-red-700" title="Add to Checklist" onClick={() => openModal('Environmental Action', 'Student group focused on campus sustainability and environmental justice issues.')}> <FaPlus /> </button>
            </div>
            <p className="text-gray-600 mb-2">Student group focused on campus sustainability and environmental justice issues.</p>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Meetings:</strong> Wednesdays, 8:00 PM</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Location:</strong> Adam Joseph Lewis Center</p>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-xl text-gray-800">Oberlin Animal Rights</h3>
              <button className="ml-2 p-1 rounded-full bg-red-100 hover:bg-red-200 text-red-700" title="Add to Checklist" onClick={() => openModal('Oberlin Animal Rights', 'Advocating for animal welfare and promoting veganism and plant-based diets.')}> <FaPlus /> </button>
            </div>
            <p className="text-gray-600 mb-2">Advocating for animal welfare and promoting veganism and plant-based diets.</p>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Meetings:</strong> Mondays, 7:00 PM</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Location:</strong> King Building, Room 102</p>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-xl text-gray-800">Oberlin Civic Engagement</h3>
              <button className="ml-2 p-1 rounded-full bg-red-100 hover:bg-red-200 text-red-700" title="Add to Checklist" onClick={() => openModal('Oberlin Civic Engagement', 'Connecting students with volunteer opportunities in the local community.')}> <FaPlus /> </button>
            </div>
            <p className="text-gray-600 mb-2">Connecting students with volunteer opportunities in the local community.</p>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Office:</strong> Bonner Center for Service and Learning</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Weekly Hours:</strong> M-F, 9:00 AM - 5:00 PM</p>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-xl text-gray-800">Oberlin Students for Gender Inclusivity</h3>
              <button className="ml-2 p-1 rounded-full bg-red-100 hover:bg-red-200 text-red-700" title="Add to Checklist" onClick={() => openModal('Oberlin Students for Gender Inclusivity', 'Advocating for gender-inclusive policies and supporting LGBTQ+ students.')}> <FaPlus /> </button>
            </div>
            <p className="text-gray-600 mb-2">Advocating for gender-inclusive policies and supporting LGBTQ+ students.</p>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Meetings:</strong> Thursdays, 7:30 PM</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Location:</strong> Multicultural Resource Center</p>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-xl text-gray-800">Students for a Free Palestine</h3>
              <button className="ml-2 p-1 rounded-full bg-red-100 hover:bg-red-200 text-red-700" title="Add to Checklist" onClick={() => openModal('Students for a Free Palestine', 'Raising awareness about Palestinian rights and promoting education on the conflict.')}> <FaPlus /> </button>
            </div>
            <p className="text-gray-600 mb-2">Raising awareness about Palestinian rights and promoting education on the conflict.</p>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Meetings:</strong> Tuesdays, 8:00 PM</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Location:</strong> King Building, Room 239</p>
            </div>
          </div>
        </div>
      </section>

      {/* Publications & Media */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <FaNewspaper className="text-red-700 mr-3 h-6 w-6" />
          <h2 className="text-2xl font-semibold text-gray-800">Publications & Media</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-xl text-gray-800">The Oberlin Review</h3>
              <button className="ml-2 p-1 rounded-full bg-red-100 hover:bg-red-200 text-red-700" title="Add to Checklist" onClick={() => openModal('The Oberlin Review', 'Student-run weekly newspaper covering campus news, events, and opinions.')}> <FaPlus /> </button>
            </div>
            <p className="text-gray-600 mb-2">Student-run weekly newspaper covering campus news, events, and opinions.</p>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Office:</strong> Burton Basement</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Publication:</strong> Fridays during academic year</p>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-xl text-gray-800">WOBC 91.5 FM</h3>
              <button className="ml-2 p-1 rounded-full bg-red-100 hover:bg-red-200 text-red-700" title="Add to Checklist" onClick={() => openModal('WOBC 91.5 FM', 'Student-run college radio station featuring diverse programming and music.')}> <FaPlus /> </button>
            </div>
            <p className="text-gray-600 mb-2">Student-run college radio station featuring diverse programming and music.</p>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Studio:</strong> Wilder Hall, Third Floor</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Broadcasting:</strong> 24/7 during academic year</p>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-xl text-gray-800">Oberlin Film Series</h3>
              <button className="ml-2 p-1 rounded-full bg-red-100 hover:bg-red-200 text-red-700" title="Add to Checklist" onClick={() => openModal('Oberlin Film Series', 'Student organization screening films and hosting discussions about cinema.')}> <FaPlus /> </button>
            </div>
            <p className="text-gray-600 mb-2">Student organization screening films and hosting discussions about cinema.</p>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Screenings:</strong> Weekends during semester</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Location:</strong> Apollo Theatre or classroom venues</p>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-xl mb-2 text-gray-800">WRCS (Web Radio Communications at Oberlin)</h3>
            <p className="text-gray-600 mb-2">Internet radio station featuring podcast-style programming and music.</p>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Studio:</strong> TIMARA department</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Website:</strong> wrcs.oberlin.edu</p>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-xl mb-2 text-gray-800">The Grape</h3>
            <p className="text-gray-600 mb-2">Alternative student publication focused on arts, culture, and campus life.</p>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Publication:</strong> Bi-weekly</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Email:</strong> thegrape@oberlin.edu</p>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-xl mb-2 text-gray-800">Plum Creek Review</h3>
            <p className="text-gray-600 mb-2">Literary magazine publishing student poetry, prose, and visual art.</p>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Submissions:</strong> Twice per academic year</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Publication:</strong> End of each semester</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recreational & Special Interest */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <FaVolleyballBall className="text-red-700 mr-3 h-6 w-6" />
          <h2 className="text-2xl font-semibold text-gray-800">Recreational & Special Interest</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-xl mb-2 text-gray-800">Oberlin Board Game Club</h3>
            <p className="text-gray-600 mb-2">Weekly gatherings to play board games, card games, and tabletop RPGs.</p>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Meetings:</strong> Saturdays, 7:00 PM</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Location:</strong> Wilder Hall, Room 112</p>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-xl mb-2 text-gray-800">Oberlin Chess Club</h3>
            <p className="text-gray-600 mb-2">Group for chess enthusiasts of all skill levels to play and improve.</p>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Meetings:</strong> Tuesdays, 7:00 PM</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Location:</strong> Science Center, Second Floor</p>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-xl mb-2 text-gray-800">Oberlin Cycling Club</h3>
            <p className="text-gray-600 mb-2">Group rides, bike maintenance workshops, and cycling advocacy.</p>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Rides:</strong> Weekends, weather permitting</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Workshop:</strong> Bike Co-op behind Keep Cottage</p>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-xl mb-2 text-gray-800">Oberlin Pottery Co-op</h3>
            <p className="text-gray-600 mb-2">Student-run ceramics studio offering classes and open studio time.</p>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Open Hours:</strong> Daily, 10:00 AM - 10:00 PM</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Location:</strong> Union Street behind Keep Cottage</p>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-xl mb-2 text-gray-800">Oberlin Adventure Club</h3>
            <p className="text-gray-600 mb-2">Group organizing hikes, camping trips, and other outdoor activities.</p>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Meetings:</strong> Bi-weekly, Thursdays at 8:00 PM</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Contact:</strong> adventure@oberlin.edu</p>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
            <h3 className="font-medium text-xl mb-2 text-gray-800">Oberlin Debate Team</h3>
            <p className="text-gray-600 mb-2">Competitive debate team participating in tournaments across the region.</p>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Practices:</strong> Mon/Wed, 7:00-9:00 PM</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Location:</strong> King Building, Room 306</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for Add to Checklist (should be at the root, not inside any loop) */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white pointer-events-auto rounded-lg shadow-xl p-8 w-full max-w-md text-gray-900">
            <h2 className="text-2xl font-bold mb-6 text-center">Add New Checklist Item</h2>
            <div className="mb-4">
              <label className="block text-base font-semibold text-gray-800 mb-1">Title*</label>
              <input
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-900 bg-white"
                value={modalTitle}
                onChange={e => setModalTitle(e.target.value)}
                required
                autoFocus
              />
            </div>
            <div className="mb-4">
              <label className="block text-base font-semibold text-gray-800 mb-1">Description</label>
              <textarea
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-900 bg-white"
                value={modalDescription}
                onChange={e => setModalDescription(e.target.value)}
                rows={3}
              />
            </div>
            <div className="flex gap-4 mb-6">
              <div className="flex-1">
                <label className="block text-base font-semibold text-gray-800 mb-1">Category</label>
                <select
                  className="w-full border border-gray-300 rounded-md px-2 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-900 bg-white"
                  value={modalCategory}
                  onChange={e => setModalCategory(e.target.value as ChecklistCategory)}
                >
                  {categories.map(cat => (
                    <option key={cat.value} value={cat.value}>{cat.label}</option>
                  ))}
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-base font-semibold text-gray-800 mb-1">Year</label>
                <select
                  className="w-full border border-gray-300 rounded-md px-2 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-900 bg-white"
                  value={modalYear}
                  onChange={e => setModalYear(e.target.value as YearLevel)}
                >
                  {yearLevels.map(y => (
                    <option key={y} value={y}>{y.charAt(0).toUpperCase() + y.slice(1)}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <button
                className="px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300 font-medium"
                onClick={() => setModalOpen(false)}
                type="button"
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 rounded bg-red-700 text-white hover:bg-red-800 font-medium"
                onClick={handleSave}
                type="button"
              >
                Add Item
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 