import { useState } from 'react';
import { FaCheck, FaTrashAlt, FaGraduationCap, FaUsers, FaBriefcase, FaUniversity, FaStore, FaLightbulb } from 'react-icons/fa';
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
  const { toggleComplete, removeItem } = useChecklistStore();
  const [showDelete, setShowDelete] = useState(false);
  
  return (
    <div 
      className={`border rounded-lg transition-all duration-200 ${
        item.completed 
          ? 'bg-gray-50 border-gray-200' 
          : 'bg-white border-gray-200 hover:border-gray-300'
      }`}
      onMouseEnter={() => setShowDelete(true)}
      onMouseLeave={() => setShowDelete(false)}
    >
      <div className="p-4">
        <div className="flex justify-between">
          <div className="flex items-start gap-3 flex-1">
            <button 
              onClick={() => toggleComplete(item.id)}
              className={`mt-0.5 h-5 w-5 rounded-sm flex-shrink-0 flex items-center justify-center border transition-colors ${
                item.completed 
                  ? 'bg-green-600 border-green-600 text-white' 
                  : 'border-gray-400 hover:border-gray-600'
              }`}
            >
              {item.completed && <FaCheck className="h-3 w-3" />}
            </button>
            
            <div className="flex-1">
              <div className="flex flex-wrap gap-2 mb-2">
                <span className={`text-xs px-2 py-0.5 rounded-full ${categoryColors[item.category]}`}>
                  <span className="flex items-center gap-1">
                    {categoryIcons[item.category]}
                    <span>{item.category.charAt(0).toUpperCase() + item.category.slice(1)}</span>
                  </span>
                </span>
                
                <span className={`text-xs px-2 py-0.5 rounded-full ${yearColors[item.yearLevel]}`}>
                  {item.yearLevel.charAt(0).toUpperCase() + item.yearLevel.slice(1)}
                </span>
                
                {item.isRecommended && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-800 flex items-center gap-1">
                    <FaLightbulb className="h-3 w-3" />
                    <span>Recommended</span>
                  </span>
                )}
              </div>
              
              <h3 className={`font-medium ${item.completed ? 'text-gray-500 line-through' : 'text-gray-800'}`}>
                {item.title}
              </h3>
              
              {item.description && (
                <p className={`text-sm mt-1 ${item.completed ? 'text-gray-400' : 'text-gray-600'}`}>
                  {item.description}
                </p>
              )}
              
              {item.completed && item.dateCompleted && (
                <p className="text-xs text-gray-500 mt-2">
                  Completed on {new Date(item.dateCompleted).toLocaleDateString()}
                </p>
              )}
            </div>
          </div>
          
          {(showDelete && !item.isRecommended) && (
            <button 
              onClick={() => removeItem(item.id)}
              className="text-gray-400 hover:text-red-600 transition-colors"
              title="Delete item"
            >
              <FaTrashAlt className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
} 