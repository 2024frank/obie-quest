import { FaUtensils } from 'react-icons/fa';

export default function DiningPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[600px] py-20">
      <div className="text-center max-w-lg">
        <FaUtensils className="text-red-700 text-5xl mx-auto mb-6" />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Dining Information Coming Soon</h1>
        <p className="text-lg text-gray-700 mb-6">
          We&apos;re currently updating our dining information with the latest options and menus.
          Please check back later for complete details on campus dining halls, cafes, and local restaurants.
        </p>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800">
          <p className="font-medium text-base">
            For current menus and hours, please visit the official 
            <a 
              href="https://oberlin.edu/campus-dining" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-red-700 hover:underline ml-1"
            >
              Oberlin Campus Dining website
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
} 