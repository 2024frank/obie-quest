"use client";
import { useState } from 'react';
import { FaBook, FaDesktop, FaUsers, FaQuestionCircle, FaGlobe, FaPlus } from 'react-icons/fa';
import { useChecklistStore, ChecklistCategory, YearLevel } from '@/stores/useChecklistStore';

const yearLevels: YearLevel[] = ['freshman', 'sophomore', 'junior', 'senior'];
const categories: { label: string; value: ChecklistCategory }[] = [
  { label: 'Academic', value: 'academic' },
  { label: 'Social', value: 'social' },
  { label: 'Career', value: 'career' },
  { label: 'Campus', value: 'campus' },
  { label: 'Downtown', value: 'downtown' },
];

export default function AcademicPage() {
  const addItem = useChecklistStore((s) => s.addItem);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalDescription, setModalDescription] = useState('');
  const [modalCategory, setModalCategory] = useState<ChecklistCategory>('academic');
  const [modalYear, setModalYear] = useState<YearLevel>('freshman');

  function openModal(title: string, description: string) {
    setModalTitle(title);
    setModalDescription(description);
    setModalCategory('academic');
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
    <div className="space-y-8">
      <header className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Academic Resources</h1>
        <p className="text-xl text-gray-800 max-w-3xl mx-auto font-medium">
          Discover libraries, study spaces, tutoring services, and other academic resources at Oberlin.
        </p>
      </header>
      
      {/* Modal */}
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
      
      {/* Libraries Section */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <FaBook className="text-red-700 mr-3 h-6 w-6" />
          <h2 className="text-2xl font-semibold text-gray-800">Libraries</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-lg text-gray-800">Mudd Center</h3>
              <button
                className="ml-2 p-1 rounded-full bg-red-100 hover:bg-red-200 text-red-700"
                title="Add to Checklist"
                onClick={() => openModal('Visit Mudd Center', 'Main library with extensive collections, study spaces, and technology resources.')}
              >
                <FaPlus />
              </button>
            </div>
            <p className="text-gray-700 mb-2">Main library with extensive collections, study spaces, and technology resources.</p>
            <p className="text-sm text-gray-700">
              <strong>Address:</strong> 148 W College St, Oberlin, OH 44074
            </p>
            <p className="text-sm text-gray-700">
              <strong>Link:</strong> <a href="https://libraries.oberlin.edu/libraries/mary-church-terrell" className="text-red-600 hover:underline" target="_blank" rel="noopener noreferrer">https://libraries.oberlin.edu/libraries/mary-church-terrell</a>
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-lg text-gray-800">Conservatory Library</h3>
              <button
                className="ml-2 p-1 rounded-full bg-red-100 hover:bg-red-200 text-red-700"
                title="Add to Checklist"
                onClick={() => openModal('Visit Conservatory Library', 'Houses music collections, scores, recordings, and practice rooms.')}
              >
                <FaPlus />
              </button>
            </div>
            <p className="text-gray-700 mb-2">Houses music collections, scores, recordings, and practice rooms.</p>
            <p className="text-sm text-gray-700">
              <strong>Address:</strong> 77 W College St, Oberlin, OH 44074
            </p>
            <p className="text-sm text-gray-700">
              <strong>Link:</strong> <a href="https://www.oberlin.edu/conservatory" className="text-red-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.oberlin.edu/conservatory</a>
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-lg text-gray-800">Science Library</h3>
              <button
                className="ml-2 p-1 rounded-full bg-red-100 hover:bg-red-200 text-red-700"
                title="Add to Checklist"
                onClick={() => openModal('Visit Science Library', 'Resources for natural sciences, mathematics, and psychology.')}
              >
                <FaPlus />
              </button>
            </div>
            <p className="text-gray-700 mb-2">Resources for natural sciences, mathematics, and psychology.</p>
            <p className="text-sm text-gray-700">
              <strong>Address:</strong> 119 Woodland St, Oberlin, OH 44074
            </p>
            <p className="text-sm text-gray-700">
              <strong>Link:</strong> <a href="https://libraries.oberlin.edu/libraries/science-library" className="text-red-600 hover:underline" target="_blank" rel="noopener noreferrer">https://libraries.oberlin.edu/libraries/science-library</a>
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-lg text-gray-800">Arts Library</h3>
              <button
                className="ml-2 p-1 rounded-full bg-red-100 hover:bg-red-200 text-red-700"
                title="Add to Checklist"
                onClick={() => openModal('Visit Arts Library', 'Resources for visual arts, art history, and architecture.')}
              >
                <FaPlus />
              </button>
            </div>
            <p className="text-gray-700 mb-2">Resources for visual arts, art history, and architecture.</p>
            <p className="text-sm text-gray-700">
              <strong>Address:</strong> 83 N Main St, Oberlin, OH 44074
            </p>
            <p className="text-sm text-gray-700">
              <strong>Link:</strong> <a href="https://libraries.oberlin.edu/libraries/clarence-ward-art-library" className="text-red-600 hover:underline" target="_blank" rel="noopener noreferrer">https://libraries.oberlin.edu/libraries/clarence-ward-art-library</a>
            </p>
          </div>
        </div>
      </section>
      
      {/* Study Spaces Section */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <FaDesktop className="text-red-700 mr-3 h-6 w-6" />
          <h2 className="text-2xl font-semibold text-gray-800">Study Spaces</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-lg text-gray-800">Wilder Hall</h3>
              <button
                className="ml-2 p-1 rounded-full bg-red-100 hover:bg-red-200 text-red-700"
                title="Add to Checklist"
                onClick={() => openModal('Visit Wilder Hall', 'Comfortable seating areas and quiet study lounges.')}
              >
                <FaPlus />
              </button>
            </div>
            <p className="text-gray-700 mb-2">Comfortable seating areas and quiet study lounges.</p>
            <p className="text-sm text-gray-700"><strong>Address:</strong> 135 W Lorain St, Oberlin, OH 44074</p>
            <p className="text-sm text-gray-700"><strong>Features:</strong> Wi-Fi, Comfortable Seating, Cafe Nearby</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-lg text-gray-800">King Building</h3>
              <button
                className="ml-2 p-1 rounded-full bg-red-100 hover:bg-red-200 text-red-700"
                title="Add to Checklist"
                onClick={() => openModal('Visit King Building', 'Modern classrooms and study areas for individual and group work.')}
              >
                <FaPlus />
              </button>
            </div>
            <p className="text-gray-700 mb-2">Modern classrooms and study areas for individual and group work.</p>
            <p className="text-sm text-gray-700"><strong>Address:</strong> King Bldg, 10 N Professor St, Oberlin, OH 44074</p>
            <p className="text-sm text-gray-700"><strong>Features:</strong> Wi-Fi, Group Study Rooms, Computer Lab</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-lg text-gray-800">Science Center</h3>
              <button
                className="ml-2 p-1 rounded-full bg-red-100 hover:bg-red-200 text-red-700"
                title="Add to Checklist"
                onClick={() => openModal('Visit Science Center', 'Dedicated study spaces for science students with specialized equipment.')}
              >
                <FaPlus />
              </button>
            </div>
            <p className="text-gray-700 mb-2">Dedicated study spaces for science students with specialized equipment.</p>
            <p className="text-sm text-gray-700"><strong>Address:</strong> 119 Woodland St, Oberlin, OH 44074</p>
            <p className="text-sm text-gray-700"><strong>Features:</strong> Wi-Fi, Lab Access, Quiet Study Areas</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-lg text-gray-800">Residence Hall Common Areas</h3>
              <button
                className="ml-2 p-1 rounded-full bg-red-100 hover:bg-red-200 text-red-700"
                title="Add to Checklist"
                onClick={() => openModal('Visit Residence Hall Common Areas', 'Convenient study spaces in residential buildings.')}
              >
                <FaPlus />
              </button>
            </div>
            <p className="text-gray-700 mb-2">Convenient study spaces in residential buildings.</p>
            <p className="text-sm text-gray-700"><strong>Features:</strong> Wi-Fi, 24/7 Access, Close to Living Spaces</p>
            <p className="text-sm text-gray-700">
              <strong>Link:</strong> <a href="https://www.oberlin.edu/housing" className="text-red-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.oberlin.edu/housing</a>
            </p>
          </div>
        </div>
      </section>
      
      {/* Academic Support Services */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <FaUsers className="text-red-700 mr-3 h-6 w-6" />
          <h2 className="text-2xl font-semibold text-gray-800">Academic Support Services</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-lg text-gray-800">Writing Center</h3>
              <button
                className="ml-2 p-1 rounded-full bg-red-100 hover:bg-red-200 text-red-700"
                title="Add to Checklist"
                onClick={() => openModal('Visit Writing Center', 'One-on-one writing support for all courses and disciplines.')}
              >
                <FaPlus />
              </button>
            </div>
            <p className="text-gray-700 mb-2">One-on-one writing support for all courses and disciplines.</p>
            <p className="text-sm text-gray-700"><strong>Location:</strong> 148 W College St, Oberlin, OH 44074</p>
            <p className="text-sm text-gray-700">
              <strong>Link:</strong> <a href="https://www.oberlin.edu/arts-and-sciences/resources-and-support/wap" className="text-red-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.oberlin.edu/arts-and-sciences/resources-and-support/wap</a>
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-lg text-gray-800">Quantitative Skills Center</h3>
              <button
                className="ml-2 p-1 rounded-full bg-red-100 hover:bg-red-200 text-red-700"
                title="Add to Checklist"
                onClick={() => openModal('Visit Quantitative Skills Center', 'Support for mathematics, statistics, and quantitative reasoning.')}
              >
                <FaPlus />
              </button>
            </div>
            <p className="text-gray-700 mb-2">Support for mathematics, statistics, and quantitative reasoning.</p>
            <p className="text-sm text-gray-700">
              <strong>Link:</strong> <a href="https://www.oberlin.edu/clear" className="text-red-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.oberlin.edu/clear</a>
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-lg text-gray-800">Peer Tutoring</h3>
              <button
                className="ml-2 p-1 rounded-full bg-red-100 hover:bg-red-200 text-red-700"
                title="Add to Checklist"
                onClick={() => openModal('Try Peer Tutoring', 'Free tutoring services across various subjects and courses.')}
              >
                <FaPlus />
              </button>
            </div>
            <p className="text-gray-700 mb-2">Free tutoring services across various subjects and courses.</p>
            <p className="text-sm text-gray-700"><strong>How to Access:</strong> Sign up through the Academic Advising Resource Center</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-lg text-gray-800">Academic Advising</h3>
              <button
                className="ml-2 p-1 rounded-full bg-red-100 hover:bg-red-200 text-red-700"
                title="Add to Checklist"
                onClick={() => openModal('Visit Academic Advising', 'Guidance on course selection, major requirements, and academic planning.')}
              >
                <FaPlus />
              </button>
            </div>
            <p className="text-gray-700 mb-2">Guidance on course selection, major requirements, and academic planning.</p>
          </div>
        </div>
      </section>
      
      {/* Additional Resources */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <FaQuestionCircle className="text-red-700 mr-3 h-6 w-6" />
          <h2 className="text-2xl font-semibold text-gray-800">Additional Resources</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-lg text-gray-800">Career Development Center</h3>
              <button
                className="ml-2 p-1 rounded-full bg-red-100 hover:bg-red-200 text-red-700"
                title="Add to Checklist"
                onClick={() => openModal('Visit Career Development Center', 'Resources for internships, career planning, and job applications.')}
              >
                <FaPlus />
              </button>
            </div>
            <p className="text-gray-700 mb-2">Resources for internships, career planning, and job applications.</p>
            <p className="text-sm text-gray-700"><strong>Location:</strong> Mudd Basement</p>
            <p className="text-sm text-gray-700"><strong>Address:</strong> 148 W College St, Oberlin, OH 44074</p>
            <p className="text-sm text-gray-700">
              <strong>Link:</strong> <a href="https://www.oberlin.edu/career" className="text-red-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.oberlin.edu/career</a>
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-lg text-gray-800">Winter Term</h3>
              <button
                className="ml-2 p-1 rounded-full bg-red-100 hover:bg-red-200 text-red-700"
                title="Add to Checklist"
                onClick={() => openModal('Explore Winter Term', 'Information on January term projects, internships, and research opportunities.')}
              >
                <FaPlus />
              </button>
            </div>
            <p className="text-gray-700 mb-2">Information on January term projects, internships, and research opportunities.</p>
            <p className="text-sm text-gray-700"><strong>Location:</strong> Mudd Basement</p>
            <p className="text-sm text-gray-700"><strong>Address:</strong> 148 W College St, Oberlin, OH 44074</p>
            <p className="text-sm text-gray-700">
              <strong>Link:</strong> <a href="https://www.oberlin.edu/winter-term" className="text-red-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.oberlin.edu/winter-term</a>
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-lg text-gray-800">Study Abroad</h3>
              <button
                className="ml-2 p-1 rounded-full bg-red-100 hover:bg-red-200 text-red-700"
                title="Add to Checklist"
                onClick={() => openModal('Explore Study Abroad', 'Resources for international education opportunities.')}
              >
                <FaPlus />
              </button>
            </div>
            <p className="text-gray-700 mb-2">Resources for international education opportunities.</p>
            <p className="text-sm text-gray-700"><strong>Location:</strong> Mudd Basement</p>
            <p className="text-sm text-gray-700"><strong>Address:</strong> 148 W College St, Oberlin, OH 44074</p>
            <p className="text-sm text-gray-700">
              <strong>Link:</strong> <a href="https://www.oberlin.edu/study-away" className="text-red-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.oberlin.edu/study-away</a>
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-lg text-gray-800">Undergraduate Research</h3>
              <button
                className="ml-2 p-1 rounded-full bg-red-100 hover:bg-red-200 text-red-700"
                title="Add to Checklist"
                onClick={() => openModal('Explore Undergraduate Research', 'Support for student research projects and funding opportunities.')}
              >
                <FaPlus />
              </button>
            </div>
            <p className="text-gray-700 mb-2">Support for student research projects and funding opportunities.</p>
            <p className="text-sm text-gray-700">
              <strong>Link:</strong> <a href="https://www.oberlin.edu/undergraduate-research" className="text-red-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.oberlin.edu/undergraduate-research</a>
            </p>
          </div>
        </div>
      </section>
      
      {/* Online Resources */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <FaGlobe className="text-red-700 mr-3 h-6 w-6" />
          <h2 className="text-2xl font-semibold text-gray-800">Online Resources</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-lg text-gray-800">Oberview</h3>
              <button
                className="ml-2 p-1 rounded-full bg-red-100 hover:bg-red-200 text-red-700"
                title="Add to Checklist"
                onClick={() => openModal('Use Oberview', 'Oberlin\'s student information system for course registration, grades, and academic records.')}
              >
                <FaPlus />
              </button>
            </div>
            <p className="text-gray-700 mb-2">Oberlin&apos;s student information system for course registration, grades, and academic records.</p>
            <p className="text-sm text-gray-700">
              <strong>Link:</strong> <a href="https://oberview.oberlin.edu/" className="text-red-600 hover:underline" target="_blank" rel="noopener noreferrer">https://oberview.oberlin.edu/</a>
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-lg text-gray-800">Blackboard</h3>
              <button
                className="ml-2 p-1 rounded-full bg-red-100 hover:bg-red-200 text-red-700"
                title="Add to Checklist"
                onClick={() => openModal('Use Blackboard', 'Course management system for assignments, readings, and communications.')}
              >
                <FaPlus />
              </button>
            </div>
            <p className="text-gray-700 mb-2">Course management system for assignments, readings, and communications.</p>
            <p className="text-sm text-gray-700">
              <strong>Link:</strong> <a href="https://blackboard.oberlin.edu/" className="text-red-600 hover:underline" target="_blank" rel="noopener noreferrer">https://blackboard.oberlin.edu/</a>
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-lg text-gray-800">Library Databases</h3>
              <button
                className="ml-2 p-1 rounded-full bg-red-100 hover:bg-red-200 text-red-700"
                title="Add to Checklist"
                onClick={() => openModal('Use Library Databases', 'Online access to journals, books, and research materials.')}
              >
                <FaPlus />
              </button>
            </div>
            <p className="text-gray-700 mb-2">Online access to journals, books, and research materials.</p>
            <p className="text-sm text-gray-700">
              <strong>Link:</strong> <a href="https://libraries.oberlin.edu/" className="text-red-600 hover:underline" target="_blank" rel="noopener noreferrer">https://libraries.oberlin.edu/</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 