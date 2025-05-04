import { useState } from 'react';
import { ChecklistCategory, YearLevel } from '@/stores/useChecklistStore';
import { FaFilter, FaGraduationCap, FaUsers, FaBriefcase, FaUniversity, FaStore } from 'react-icons/fa';

const categories: { value: ChecklistCategory; label: string; icon: React.ReactNode }[] = [
  { value: 'academic', label: 'Academic', icon: <FaGraduationCap className="text-blue-600" /> },
  { value: 'social', label: 'Social', icon: <FaUsers className="text-purple-600" /> },
  { value: 'career', label: 'Career', icon: <FaBriefcase className="text-green-600" /> },
  { value: 'campus', label: 'Campus', icon: <FaUniversity className="text-red-600" /> },
  { value: 'downtown', label: 'Downtown', icon: <FaStore className="text-amber-600" /> }
];

const yearLevels: { value: YearLevel; label: string }[] = [
  { value: 'freshman', label: 'Freshman' },
  { value: 'sophomore', label: 'Sophomore' },
  { value: 'junior', label: 'Junior' },
  { value: 'senior', label: 'Senior' }
];

interface ChecklistFiltersProps {
  onFilterChange: (filters: {
    categories: ChecklistCategory[];
    yearLevels: YearLevel[];
    completed: boolean | null;
    isRecommended: boolean | null;
  }) => void;
}

export default function ChecklistFilters({ onFilterChange }: ChecklistFiltersProps) {
  const [selectedCategories, setSelectedCategories] = useState<ChecklistCategory[]>([]);
  const [selectedYears, setSelectedYears] = useState<YearLevel[]>([]);
  const [completionStatus, setCompletionStatus] = useState<boolean | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  
  const handleCategoryToggle = (category: ChecklistCategory) => {
    setSelectedCategories(prev => {
      const isSelected = prev.includes(category);
      const newSelection = isSelected
        ? prev.filter(cat => cat !== category)
        : [...prev, category];
        
      updateFilters(newSelection, selectedYears, completionStatus);
      return newSelection;
    });
  };
  
  const handleYearToggle = (year: YearLevel) => {
    setSelectedYears(prev => {
      const isSelected = prev.includes(year);
      const newSelection = isSelected
        ? prev.filter(y => y !== year)
        : [...prev, year];
        
      updateFilters(selectedCategories, newSelection, completionStatus);
      return newSelection;
    });
  };
  
  const handleCompletionChange = (status: boolean | null) => {
    setCompletionStatus(status);
    updateFilters(selectedCategories, selectedYears, status);
  };
  
  const updateFilters = (
    categories: ChecklistCategory[],
    years: YearLevel[],
    completed: boolean | null
  ) => {
    onFilterChange({
      categories,
      yearLevels: years,
      completed,
      isRecommended: null
    });
  };
  
  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedYears([]);
    setCompletionStatus(null);
    updateFilters([], [], null);
  };
  
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-3">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 text-gray-700 hover:text-red-700 transition-colors"
        >
          <FaFilter />
          <span className="font-medium">{showFilters ? 'Hide Filters' : 'Show Filters'}</span>
        </button>
        
        {showFilters && (
          <button
            onClick={resetFilters}
            className="text-sm text-red-600 hover:text-red-800 transition-colors"
          >
            Reset All
          </button>
        )}
      </div>
      
      {showFilters && (
        <div className="bg-white p-4 rounded-lg border border-gray-200 space-y-4">
          {/* Categories */}
          <div>
            <h3 className="font-medium text-gray-800 mb-2">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.value}
                  onClick={() => handleCategoryToggle(category.value)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm transition-colors ${
                    selectedCategories.includes(category.value)
                      ? 'bg-gray-800 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.icon}
                  {category.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* Year Levels */}
          <div>
            <h3 className="font-medium text-gray-800 mb-2">Year</h3>
            <div className="flex flex-wrap gap-2">
              {yearLevels.map(year => (
                <button
                  key={year.value}
                  onClick={() => handleYearToggle(year.value)}
                  className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                    selectedYears.includes(year.value)
                      ? 'bg-gray-800 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {year.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* Completion Status */}
          <div>
            <h3 className="font-medium text-gray-800 mb-2">Status</h3>
            <div className="flex gap-2">
              <button
                onClick={() => handleCompletionChange(true)}
                className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                  completionStatus === true
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Completed
              </button>
              <button
                onClick={() => handleCompletionChange(false)}
                className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                  completionStatus === false
                    ? 'bg-yellow-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                In Progress
              </button>
              <button
                onClick={() => handleCompletionChange(null)}
                className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                  completionStatus === null
                    ? 'bg-gray-800 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 