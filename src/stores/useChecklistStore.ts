import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type ChecklistCategory = 'academic' | 'social' | 'career' | 'campus' | 'downtown';
export type YearLevel = 'freshman' | 'sophomore' | 'junior' | 'senior';

export interface ChecklistItem {
  id: string;
  title: string;
  category: ChecklistCategory;
  yearLevel: YearLevel;
  description: string;
  completed: boolean;
  dateAdded: string;
  dateCompleted?: string;
}

interface ChecklistState {
  items: ChecklistItem[];
  addItem: (item: Omit<ChecklistItem, 'id' | 'dateAdded' | 'completed'>) => void;
  toggleComplete: (id: string) => void;
  removeItem: (id: string) => void;
  getItemsByCategory: (category: ChecklistCategory) => ChecklistItem[];
  getItemsByYear: (yearLevel: YearLevel) => ChecklistItem[];
  getCompletedItems: () => ChecklistItem[];
  getPendingItems: () => ChecklistItem[];
  filterItems: (filters: {
    categories?: ChecklistCategory[],
    yearLevels?: YearLevel[],
    completed?: boolean
  }) => ChecklistItem[];
}

export const useChecklistStore = create<ChecklistState>()(
  persist(
    (set, get) => ({
      items: getDefaultItems(),
      
      addItem: (item) => set((state) => ({
        items: [
          ...state.items,
          {
            ...item,
            id: generateId(),
            dateAdded: new Date().toISOString(),
            completed: false,
          }
        ]
      })),
      
      toggleComplete: (id) => set((state) => ({
        items: state.items.map(item => 
          item.id === id 
            ? { 
                ...item, 
                completed: !item.completed,
                dateCompleted: !item.completed ? new Date().toISOString() : undefined
              } 
            : item
        )
      })),
      
      removeItem: (id) => set((state) => ({
        items: state.items.filter(item => item.id !== id)
      })),
      
      getItemsByCategory: (category) => {
        return get().items.filter(item => item.category === category);
      },
      
      getItemsByYear: (yearLevel) => {
        return get().items.filter(item => item.yearLevel === yearLevel);
      },
      
      getCompletedItems: () => {
        return get().items.filter(item => item.completed);
      },
      
      getPendingItems: () => {
        return get().items.filter(item => !item.completed);
      },
      
      filterItems: (filters) => {
        let items = get().items;
        
        if (filters.categories && filters.categories.length > 0) {
          items = items.filter(item => filters.categories?.includes(item.category));
        }
        
        if (filters.yearLevels && filters.yearLevels.length > 0) {
          items = items.filter(item => filters.yearLevels?.includes(item.yearLevel));
        }
        
        if (filters.completed !== undefined) {
          items = items.filter(item => item.completed === filters.completed);
        }
        
        return items;
      }
    }),
    {
      name: 'oberlin-checklist-storage',
    }
  )
);

// Helper functions
function generateId(): string {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

// Default checklist items for new users
function getDefaultItems(): ChecklistItem[] {
  return [
    // Freshman Year Academic
    {
      id: generateId(),
      title: 'Visit academic advising',
      category: 'academic',
      yearLevel: 'freshman',
      description: 'Schedule a meeting with your academic advisor to plan your courses',
      completed: false,
      dateAdded: new Date().toISOString()
    },
    {
      id: generateId(),
      title: 'Explore the Mudd Library',
      category: 'academic',
      yearLevel: 'freshman',
      description: 'Take a tour of the library and learn about its resources',
      completed: false,
      dateAdded: new Date().toISOString()
    },
    {
      id: generateId(),
      title: 'Attend professor office hours',
      category: 'academic',
      yearLevel: 'freshman',
      description: 'Visit at least three professors during their office hours',
      completed: false,
      dateAdded: new Date().toISOString()
    },
    
    // Freshman Year Social
    {
      id: generateId(),
      title: 'Join a student organization',
      category: 'social',
      yearLevel: 'freshman',
      description: 'Attend the student activities fair and join at least one club',
      completed: false,
      dateAdded: new Date().toISOString()
    },
    {
      id: generateId(),
      title: 'Attend a campus performance',
      category: 'social',
      yearLevel: 'freshman',
      description: 'Go to a concert, play, or other performance on campus',
      completed: false,
      dateAdded: new Date().toISOString()
    },
    
    // Freshman Year Campus
    {
      id: generateId(),
      title: 'Try all dining halls',
      category: 'campus',
      yearLevel: 'freshman',
      description: 'Eat at each campus dining hall at least once',
      completed: false,
      dateAdded: new Date().toISOString()
    },
    {
      id: generateId(),
      title: 'Visit the Allen Memorial Art Museum',
      category: 'campus',
      yearLevel: 'freshman',
      description: 'Explore the art collection at the Allen Memorial Art Museum',
      completed: false,
      dateAdded: new Date().toISOString()
    },
    
    // Sophomore Year Academic
    {
      id: generateId(),
      title: 'Declare your major',
      category: 'academic',
      yearLevel: 'sophomore',
      description: 'Complete the necessary paperwork to declare your major',
      completed: false,
      dateAdded: new Date().toISOString()
    },
    {
      id: generateId(),
      title: 'Research Winter Term options',
      category: 'academic',
      yearLevel: 'sophomore',
      description: 'Look into projects, internships, or other opportunities for Winter Term',
      completed: false,
      dateAdded: new Date().toISOString()
    },
    
    // Sophomore Year Social
    {
      id: generateId(),
      title: 'Volunteer in the community',
      category: 'social',
      yearLevel: 'sophomore',
      description: 'Participate in a community service project in Oberlin',
      completed: false,
      dateAdded: new Date().toISOString()
    },
    
    // Junior Year Academic
    {
      id: generateId(),
      title: 'Explore study abroad options',
      category: 'academic',
      yearLevel: 'junior',
      description: 'Research and apply for study abroad programs',
      completed: false,
      dateAdded: new Date().toISOString()
    },
    {
      id: generateId(),
      title: 'Begin research or capstone preparation',
      category: 'academic',
      yearLevel: 'junior',
      description: 'Start planning for senior research projects or capstone',
      completed: false,
      dateAdded: new Date().toISOString()
    },
    
    // Junior Year Career
    {
      id: generateId(),
      title: 'Update resume and LinkedIn',
      category: 'career',
      yearLevel: 'junior',
      description: 'Refresh your resume and professional profiles',
      completed: false,
      dateAdded: new Date().toISOString()
    },
    {
      id: generateId(),
      title: 'Apply for summer internships',
      category: 'career',
      yearLevel: 'junior',
      description: 'Research and apply for internships in your field',
      completed: false,
      dateAdded: new Date().toISOString()
    },
    
    // Senior Year Academic
    {
      id: generateId(),
      title: 'Complete senior project',
      category: 'academic',
      yearLevel: 'senior',
      description: 'Finish your honors thesis, capstone, or senior project',
      completed: false,
      dateAdded: new Date().toISOString()
    },
    
    // Senior Year Career
    {
      id: generateId(),
      title: 'Visit Career Development Center',
      category: 'career',
      yearLevel: 'senior',
      description: 'Get help with job applications and interview preparation',
      completed: false,
      dateAdded: new Date().toISOString()
    },
    {
      id: generateId(),
      title: 'Apply for post-graduation opportunities',
      category: 'career',
      yearLevel: 'senior',
      description: 'Apply for jobs, graduate schools, or other post-graduation plans',
      completed: false,
      dateAdded: new Date().toISOString()
    },
    
    // Downtown Explorations (all years)
    {
      id: generateId(),
      title: 'Eat at The Feve',
      category: 'downtown',
      yearLevel: 'freshman',
      description: 'Try the famous burgers at this popular student hangout',
      completed: false,
      dateAdded: new Date().toISOString()
    },
    {
      id: generateId(),
      title: 'Watch a movie at the Apollo Theatre',
      category: 'downtown',
      yearLevel: 'freshman',
      description: 'See a film at Oberlin\'s historic movie theater',
      completed: false,
      dateAdded: new Date().toISOString()
    },
    {
      id: generateId(),
      title: 'Shop at the Oberlin Farmers Market',
      category: 'downtown',
      yearLevel: 'sophomore',
      description: 'Browse local produce and goods at the farmers market',
      completed: false,
      dateAdded: new Date().toISOString()
    }
  ];
} 