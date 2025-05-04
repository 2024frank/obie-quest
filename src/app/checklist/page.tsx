'use client';

import { useState, useEffect } from 'react';
import { FaCheckSquare, FaPlus, FaFilter } from 'react-icons/fa';
import { 
  useChecklistStore, 
  ChecklistItem as ChecklistItemType, 
  ChecklistCategory, 
  YearLevel 
} from '@/stores/useChecklistStore';
import ChecklistItem from '@/components/checklist/ChecklistItem';
import ChecklistFilters from '@/components/checklist/ChecklistFilters';

export default function ChecklistPage() {
  const { items, addItem } = useChecklistStore();
  const [recommendedItems, setRecommendedItems] = useState<ChecklistItemType[]>([]);
  const [userItems, setUserItems] = useState<ChecklistItemType[]>([]);
  const [progress, setProgress] = useState({ completed: 0, total: 0 });
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedYear, setSelectedYear] = useState<YearLevel>('freshman');
  const [showFilters, setShowFilters] = useState(false);
  const [newItem, setNewItem] = useState({
    title: '',
    description: '',
    category: 'academic' as ChecklistCategory,
    yearLevel: 'freshman' as YearLevel
  });
  
  // Initialize items
  useEffect(() => {
    const recommended = items.filter(item => item.isRecommended === true);
    const userAdded = items.filter(item => !item.isRecommended);
    
    setRecommendedItems(recommended);
    setUserItems(userAdded);
    updateProgress(userAdded); // Only track progress for user items
  }, [items]);
  
  // Calculate progress
  const updateProgress = (itemsList: ChecklistItemType[]) => {
    const completed = itemsList.filter(item => item.completed).length;
    setProgress({
      completed,
      total: itemsList.length
    });
  };
  
  // Handle filter changes
  const handleFilterChange = (filters: {
    categories: ChecklistCategory[];
    yearLevels: YearLevel[];
    completed: boolean | null;
    isRecommended: boolean | null;
  }) => {
    let filtered = items.filter(item => !item.isRecommended);
    
    if (filters.categories.length > 0) {
      filtered = filtered.filter(item => filters.categories.includes(item.category));
    }
    
    if (filters.yearLevels.length > 0) {
      filtered = filtered.filter(item => filters.yearLevels.includes(item.yearLevel));
    }
    
    if (filters.completed !== null) {
      filtered = filtered.filter(item => item.completed === filters.completed);
    }
    
    setUserItems(filtered);
    updateProgress(filtered);
  };
  
  // Handle adding new item
  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (newItem.title.trim() === '') return;
    
    addItem({
      title: newItem.title,
      description: newItem.description,
      category: newItem.category,
      yearLevel: newItem.yearLevel
    });
    
    // Reset form and close modal
    setNewItem({
      title: '',
      description: '',
      category: 'academic',
      yearLevel: 'freshman'
    });
    setShowAddModal(false);
  };
  
  // Add recommended item to personal checklist
  const addToChecklist = (item: ChecklistItemType) => {
    addItem({
      title: item.title,
      description: item.description,
      category: item.category,
      yearLevel: item.yearLevel
    });
  };
  
  // Filter recommended items by year
  const filteredRecommended = recommendedItems.filter(item => item.yearLevel === selectedYear);
  
  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-50 overflow-hidden">
      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <header className="bg-red-700 text-white p-6 md:p-8 shadow-md">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">My Oberlin Checklist</h1>
          <p className="text-xl opacity-90">
            Track your progress and add activities to make the most of your Oberlin experience.
          </p>
        </header>
        
        <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          {/* Progress Bar */}
          <section className="bg-white p-4 md:p-6 rounded-lg shadow-md mb-6">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-4">
              <h2 className="text-lg md:text-xl font-semibold mb-2 sm:mb-0 text-gray-800">Your Progress</h2>
              <div className="flex items-center gap-2">
                <span className="text-gray-700 text-sm">
                  {progress.completed} of {progress.total} completed
                </span>
                <span className="text-sm font-medium text-gray-800">
                  {progress.total > 0 
                    ? `(${Math.round((progress.completed / progress.total) * 100)}%)` 
                    : '(0%)'}
                </span>
              </div>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-4 mb-1">
              <div 
                className="bg-red-700 h-4 rounded-full transition-all duration-500"
                style={{ 
                  width: progress.total > 0 
                    ? `${(progress.completed / progress.total) * 100}%` 
                    : '0%' 
                }}
              ></div>
            </div>
            
            <div className="flex justify-between mt-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 text-gray-700 hover:text-red-700 transition-colors"
              >
                <FaFilter />
                <span className="font-medium">{showFilters ? 'Hide Filters' : 'Show Filters'}</span>
              </button>
              
              <button
                onClick={() => setShowAddModal(true)}
                className="flex items-center gap-2 bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-800 transition-colors"
              >
                <FaPlus className="text-sm" />
                Add Custom Item
              </button>
            </div>
          </section>
          
          {/* Filters */}
          {showFilters && (
            <ChecklistFilters onFilterChange={handleFilterChange} />
          )}
          
          {/* User Items */}
          {userItems.length > 0 ? (
            <section className="space-y-4 mt-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                  <span>My Activities</span>
                  <span className="ml-2 bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full text-sm">
                    {userItems.length}
                  </span>
                </h2>
              </div>
              <div className="space-y-3">
                {userItems.map(item => (
                  <ChecklistItem key={item.id} item={item} />
                ))}
              </div>
            </section>
          ) : (
            <div className="bg-white p-6 rounded-lg shadow-md text-center mt-6">
              <FaCheckSquare className="mx-auto text-gray-400 text-5xl mb-4" />
              <h3 className="text-xl font-medium text-gray-800 mb-2">No items in your checklist</h3>
              <p className="text-gray-700 mb-4">
                Add activities from the recommended list or create your own custom items.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Recommended Activities Section */}
      <div className="w-full md:w-80 lg:w-96 border-t md:border-t-0 md:border-l border-gray-200 bg-white flex flex-col h-[50vh] md:h-full">
        <div className="p-4 border-b border-gray-200 bg-gray-50">
          <h2 className="text-xl font-semibold text-gray-800">Recommended Activities</h2>
          <p className="text-sm text-gray-600 mt-1">Click + to add to your checklist</p>
        </div>
        
        {/* Year Level Tabs */}
        <div className="grid grid-cols-4 border-b border-gray-200">
          {['freshman', 'sophomore', 'junior', 'senior'].map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year as YearLevel)}
              className={`py-3 text-sm font-medium transition-colors ${
                selectedYear === year
                  ? 'text-red-700 border-b-2 border-red-700 bg-red-50'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
            >
              {year.charAt(0).toUpperCase() + year.slice(1)}
            </button>
          ))}
        </div>
        
        {/* Recommended Items List */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 space-y-3">
            {filteredRecommended.length > 0 ? (
              filteredRecommended.map(item => (
                <div key={item.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-gray-800 font-medium">{item.title}</h3>
                    <button
                      onClick={() => addToChecklist(item)}
                      className="bg-red-100 text-red-700 hover:bg-red-200 rounded-full p-1.5"
                      title="Add to my checklist"
                    >
                      <FaPlus className="text-sm" />
                    </button>
                  </div>
                  <p className="text-sm text-gray-600">{item.description}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">
                      {item.category}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">No activities found for this year level</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Add Custom Item Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Add Custom Item</h2>
            
            <form onSubmit={handleAddItem}>
              <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  Title*
                </label>
                <input
                  type="text"
                  id="title"
                  value={newItem.title}
                  onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white text-gray-900"
                  placeholder="e.g., Visit Tappan Square"
                  required
                  autoFocus
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  id="description"
                  value={newItem.description}
                  onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white text-gray-900"
                  placeholder="e.g., Walk around the historic Tappan Square and take photos with the Oberlin rocks"
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
                    value={newItem.category}
                    onChange={(e) => setNewItem({ ...newItem, category: e.target.value as ChecklistCategory })}
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
                    Year Level
                  </label>
                  <select
                    id="yearLevel"
                    value={newItem.yearLevel}
                    onChange={(e) => setNewItem({ ...newItem, yearLevel: e.target.value as YearLevel })}
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
                  onClick={() => setShowAddModal(false)}
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
    </div>
  );
} 