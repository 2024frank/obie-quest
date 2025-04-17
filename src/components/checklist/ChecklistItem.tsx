import { useState } from 'react';
import { FaCheck, FaTrashAlt, FaGraduationCap, FaUsers, FaBriefcase, FaUniversity, FaStore } from 'react-icons/fa';
import { ChecklistItem as ChecklistItemType, ChecklistCategory, useChecklistStore } from '@/stores/useChecklistStore';

const categoryIcons: Record<ChecklistCategory, React.ReactNode> = {
  academic: <FaGraduationCap className="text-blue-600" />,
  social: <FaUsers className="text-purple-600" />,
  career: <FaBriefcase className="text-green-600" />,
  campus: <FaUniversity className="text-red-600" />,
  downtown: <FaStore className="text-amber-600" />
};

const categoryColors: Record<ChecklistCategory, string> = {
  academic: 'bg-blue-100 text-blue-800',
  social: 'bg-purple-100 text-purple-800',
  career: 'bg-green-100 text-green-800',
  campus: 'bg-red-100 text-red-800',
  downtown: 'bg-amber-100 text-amber-800'
};

const yearColors: Record<string, string> = {
  freshman: 'bg-cyan-100 text-cyan-800',
  sophomore: 'bg-teal-100 text-teal-800',
  junior: 'bg-indigo-100 text-indigo-800',
  senior: 'bg-pink-100 text-pink-800'
};

interface ChecklistItemProps {
  item: ChecklistItemType;
}

export default function ChecklistItem({ item }: ChecklistItemProps) {
  const [showDetails, setShowDetails] = useState(false);
  const { toggleComplete, removeItem } = useChecklistStore();
  
  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleComplete(item.id);
  };
  
  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    removeItem(item.id);
  };
  
  return (
    <div 
      className={`border rounded-lg p-4 mb-3 transition-all cursor-pointer ${
        item.completed 
          ? 'bg-gray-50 border-gray-200' 
          : 'bg-white border-gray-200 hover:border-red-200'
      }`}
      onClick={() => setShowDetails(!showDetails)}
    >
      <div className="flex items-start gap-3">
        <button
          onClick={handleToggle}
          className={`flex-shrink-0 w-6 h-6 mt-0.5 rounded-full border flex items-center justify-center transition-colors ${
            item.completed 
              ? 'bg-green-500 border-green-500 text-white' 
              : 'border-gray-300 hover:border-green-500'
          }`}
          aria-label={item.completed ? "Mark as incomplete" : "Mark as complete"}
        >
          {item.completed && <FaCheck className="w-3 h-3" />}
        </button>
        
        <div className="flex-grow">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className={`${item.completed ? 'line-through text-gray-500' : 'text-gray-900'} font-medium`}>
              {item.title}
            </span>
            
            <div className="flex gap-1.5">
              <span className={`text-xs px-2 py-0.5 rounded ${categoryColors[item.category]}`}>
                {item.category}
              </span>
              <span className={`text-xs px-2 py-0.5 rounded ${yearColors[item.yearLevel]}`}>
                {item.yearLevel}
              </span>
            </div>
          </div>
          
          {showDetails && (
            <div className="mt-3 text-gray-600 text-sm">
              <p>{item.description}</p>
              
              <div className="mt-3 pt-2 border-t border-gray-100 flex items-center justify-between">
                <div className="text-xs text-gray-500">
                  Added: {new Date(item.dateAdded).toLocaleDateString()}
                  {item.dateCompleted && (
                    <span className="ml-3">
                      Completed: {new Date(item.dateCompleted).toLocaleDateString()}
                    </span>
                  )}
                </div>
                
                <button 
                  onClick={handleRemove}
                  className="text-red-500 hover:text-red-700 transition-colors"
                  aria-label="Remove item"
                >
                  <FaTrashAlt />
                </button>
              </div>
            </div>
          )}
        </div>
        
        <div className="flex-shrink-0 w-6 h-6 mt-0.5 text-gray-400">
          {categoryIcons[item.category]}
        </div>
      </div>
    </div>
  );
} 