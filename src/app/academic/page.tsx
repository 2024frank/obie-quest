import { FaBook, FaDesktop, FaUsers, FaQuestionCircle, FaGlobe } from 'react-icons/fa';

export default function AcademicPage() {
  return (
    <div className="space-y-8">
      <header className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Academic Resources</h1>
        <p className="text-xl text-gray-800 max-w-3xl mx-auto font-medium">
          Discover libraries, study spaces, tutoring services, and other academic resources at Oberlin.
        </p>
      </header>
      
      {/* Libraries Section */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <FaBook className="text-red-700 mr-3 h-6 w-6" />
          <h2 className="text-2xl font-semibold text-gray-800">Libraries</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-lg mb-2 text-gray-800">Mudd Center</h3>
            <p className="text-gray-700 mb-2">Main library with extensive collections, study spaces, and technology resources.</p>
            <p className="text-sm text-gray-700">
              <strong>Hours:</strong> Mon-Thu 8am-2am, Fri 8am-10pm, Sat 10am-10pm, Sun 10am-2am
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-lg mb-2 text-gray-800">Conservatory Library</h3>
            <p className="text-gray-700 mb-2">Houses music collections, scores, recordings, and practice rooms.</p>
            <p className="text-sm text-gray-700">
              <strong>Hours:</strong> Mon-Fri 9am-9pm, Sat-Sun 12pm-5pm
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-lg mb-2 text-gray-800">Science Library</h3>
            <p className="text-gray-700 mb-2">Resources for natural sciences, mathematics, and psychology.</p>
            <p className="text-sm text-gray-700">
              <strong>Hours:</strong> Mon-Thu 8am-10pm, Fri 8am-6pm, Sat 12pm-6pm, Sun 12pm-10pm
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-lg mb-2 text-gray-800">Art Library</h3>
            <p className="text-gray-700 mb-2">Resources for visual arts, art history, and architecture.</p>
            <p className="text-sm text-gray-700">
              <strong>Hours:</strong> Mon-Fri 10am-5pm, Sat-Sun Closed
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
            <h3 className="font-medium text-lg mb-2 text-gray-800">Wilder Hall</h3>
            <p className="text-gray-700 mb-2">Comfortable seating areas and quiet study lounges.</p>
            <p className="text-sm text-gray-700"><strong>Features:</strong> Wi-Fi, Comfortable Seating, Cafe Nearby</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-lg mb-2 text-gray-800">King Building</h3>
            <p className="text-gray-700 mb-2">Modern classrooms and study areas for individual and group work.</p>
            <p className="text-sm text-gray-700"><strong>Features:</strong> Wi-Fi, Group Study Rooms, Computer Lab</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-lg mb-2 text-gray-800">Science Center</h3>
            <p className="text-gray-700 mb-2">Dedicated study spaces for science students with specialized equipment.</p>
            <p className="text-sm text-gray-700"><strong>Features:</strong> Wi-Fi, Lab Access, Quiet Study Areas</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-lg mb-2 text-gray-800">Residence Hall Common Areas</h3>
            <p className="text-gray-600 mb-2">Convenient study spaces in residential buildings.</p>
            <p className="text-sm"><strong>Features:</strong> Wi-Fi, 24/7 Access, Close to Living Spaces</p>
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
            <h3 className="font-medium text-lg mb-2 text-gray-800">Writing Center</h3>
            <p className="text-gray-600 mb-2">One-on-one writing support for all courses and disciplines.</p>
            <p className="text-sm"><strong>Location:</strong> Mudd Center, Floor 2</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-lg mb-2 text-gray-800">Quantitative Skills Center</h3>
            <p className="text-gray-600 mb-2">Support for mathematics, statistics, and quantitative reasoning.</p>
            <p className="text-sm"><strong>Location:</strong> King Building, Room 105</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-lg mb-2 text-gray-800">Peer Tutoring</h3>
            <p className="text-gray-600 mb-2">Free tutoring services across various subjects and courses.</p>
            <p className="text-sm"><strong>How to Access:</strong> Sign up through the Academic Advising Resource Center</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-lg mb-2 text-gray-800">Academic Advising</h3>
            <p className="text-gray-600 mb-2">Guidance on course selection, major requirements, and academic planning.</p>
            <p className="text-sm"><strong>Location:</strong> Peters Hall, Room 202</p>
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
            <h3 className="font-medium text-lg mb-2 text-gray-800">Career Development Center</h3>
            <p className="text-gray-600 mb-2">Resources for internships, career planning, and job applications.</p>
            <p className="text-sm"><strong>Location:</strong> Stevenson Hall</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-lg mb-2 text-gray-800">Winter Term</h3>
            <p className="text-gray-600 mb-2">Information on January term projects, internships, and research opportunities.</p>
            <p className="text-sm"><strong>Contact:</strong> Winter Term Office, Peters Hall</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-lg mb-2 text-gray-800">Study Abroad</h3>
            <p className="text-gray-600 mb-2">Resources for international education opportunities.</p>
            <p className="text-sm"><strong>Location:</strong> Peters Hall, Room 205</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-lg mb-2 text-gray-800">Undergraduate Research</h3>
            <p className="text-gray-600 mb-2">Support for student research projects and funding opportunities.</p>
            <p className="text-sm"><strong>Contact:</strong> Office of Undergraduate Research</p>
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
            <h3 className="font-medium text-lg mb-2 text-gray-800">PRESTO</h3>
            <p className="text-gray-600 mb-2">Oberlin&apos;s student information system for course registration, grades, and academic records.</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-lg mb-2 text-gray-800">Blackboard</h3>
            <p className="text-gray-600 mb-2">Course management system for assignments, readings, and communications.</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-lg mb-2 text-gray-800">Library Databases</h3>
            <p className="text-gray-600 mb-2">Online access to journals, books, and research materials.</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-lg mb-2 text-gray-800">Oberlin Mobile App</h3>
            <p className="text-gray-600 mb-2">Access to campus resources, events, and information on the go.</p>
          </div>
        </div>
      </section>
    </div>
  );
} 