'use client';

import { useState, useEffect } from 'react';
import { FaCheckSquare, FaPlus, FaLightbulb } from 'react-icons/fa';
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
  const [filteredItems, setFilteredItems] = useState<ChecklistItemType[]>([]);
  const [recommendedItems, setRecommendedItems] = useState<ChecklistItemType[]>([]);
  const [userItems, setUserItems] = useState<ChecklistItemType[]>([]);
  const [progress, setProgress] = useState({ completed: 0, total: 0 });
  const [showAddModal, setShowAddModal] = useState(false);
  const [newItem, setNewItem] = useState({
    title: '',
    description: '',
    category: 'academic' as ChecklistCategory,
    yearLevel: 'freshman' as YearLevel
  });
  
  // Initialize filtered items with all items
  useEffect(() => {
    console.log("All items:", items);
    console.log("Items with isRecommended=true:", items.filter(item => item.isRecommended));
    console.log("Items with isRecommended=undefined or false:", items.filter(item => !item.isRecommended));
    
    setFilteredItems(items);
    
    // Separate recommended from user-added items
    const recommended = items.filter(item => item.isRecommended === true);
    const userAdded = items.filter(item => item.isRecommended !== true);
    
    console.log("Recommended items count:", recommended.length);
    console.log("User-added items count:", userAdded.length);
    
    setRecommendedItems(recommended);
    setUserItems(userAdded);
    
    updateProgress(items);
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
    let filtered = items;
    
    if (filters.categories.length > 0) {
      filtered = filtered.filter(item => filters.categories.includes(item.category));
    }
    
    if (filters.yearLevels.length > 0) {
      filtered = filtered.filter(item => filters.yearLevels.includes(item.yearLevel));
    }
    
    if (filters.completed !== null) {
      filtered = filtered.filter(item => item.completed === filters.completed);
    }
    
    if (filters.isRecommended !== null) {
      filtered = filtered.filter(item => (item.isRecommended === filters.isRecommended));
    }
    
    setFilteredItems(filtered);
    
    // Also update the separated lists
    const recommended = filtered.filter(item => item.isRecommended === true);
    const userAdded = filtered.filter(item => item.isRecommended !== true);
    
    setRecommendedItems(recommended);
    setUserItems(userAdded);
    
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
  
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <header className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">My Oberlin Checklist</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Track your personalized 4-year Oberlin College experience with this checklist.
          Add your own items or complete the recommended experiences!
        </p>
      </header>
      
      {/* Progress Bar */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-4">
          <h2 className="text-xl font-semibold mb-2 sm:mb-0">Your Progress</h2>
          <div className="flex items-center gap-2">
            <span className="text-gray-600 text-sm">
              {progress.completed} of {progress.total} completed
            </span>
            <span className="text-sm font-medium">
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
        
        <div className="flex justify-end mt-4">
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-800 transition-colors"
          >
            <FaPlus className="text-sm" />
            Add New Item
          </button>
        </div>
      </section>
      
      {/* Filters */}
      <ChecklistFilters onFilterChange={handleFilterChange} />
      
      {/* Recommended Checklist Items */}
      {recommendedItems.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 flex items-center">
            <FaLightbulb className="text-yellow-500 mr-2" />
            <span>Recommended Oberlin Experiences</span>
            <span className="ml-2 bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full text-sm">
              {recommendedItems.length}
            </span>
          </h2>
          <div className="space-y-3">
            {recommendedItems.map(item => (
              <ChecklistItem key={item.id} item={item} />
            ))}
          </div>
        </section>
      )}
      
      {/* My Checklist Items */}
      {userItems.length > 0 && (
        <section className="space-y-4 mt-8">
          <h2 className="text-xl font-semibold text-gray-800 flex items-center">
            <span>My Added Activities</span>
            <span className="ml-2 bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full text-sm">
              {userItems.length}
            </span>
          </h2>
          <div className="space-y-3">
            {userItems.map(item => (
              <ChecklistItem key={item.id} item={item} />
            ))}
          </div>
        </section>
      )}
      
      {/* Empty State */}
      {filteredItems.length === 0 && (
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <FaCheckSquare className="mx-auto text-gray-300 text-5xl mb-4" />
          <h3 className="text-xl font-medium text-gray-700 mb-2">No items found</h3>
          <p className="text-gray-500 mb-4">
            No items match your current filters. Try adjusting your filters or add a new item.
          </p>
          <button
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center gap-2 bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-800 transition-colors"
          >
            <FaPlus className="text-sm" />
            Add New Item
          </button>
        </div>
      )}
      
      {/* Add Item Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Add New Checklist Item</h2>
            
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white text-gray-800"
                  placeholder=""
                  required
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white text-gray-800"
                  placeholder=""
                  rows={3}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <select
                    id="category"
                    value={newItem.category}
                    onChange={(e) => setNewItem({ ...newItem, category: e.target.value as ChecklistCategory })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white text-gray-800"
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
                    Year
                  </label>
                  <select
                    id="yearLevel"
                    value={newItem.yearLevel}
                    onChange={(e) => setNewItem({ ...newItem, yearLevel: e.target.value as YearLevel })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white text-gray-800"
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
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-red-700 text-white rounded-md hover:bg-red-800 transition-colors"
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