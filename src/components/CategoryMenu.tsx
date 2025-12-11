import { useState, useEffect, useRef } from 'react';
import { Menu, X, Shirt, ShoppingBag, Watch, User, Utensils, Baby, Snowflake, Footprints, Activity, Laptop, Home } from 'lucide-react';
import { Button } from '../components/ui/button';

interface CategoryMenuProps {
  onCategorySelect: (category: string) => void;
  selectedCategories: string[];
}

const CategoryMenu = ({ onCategorySelect, selectedCategories }: CategoryMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Updated categories with more relevant icons
  const categories = [
    { id: 1, name: 'Food & Beverages', icon: <Utensils className="h-5 w-5" /> },
    { id: 2, name: 'Baby Products', icon: <Baby className="h-5 w-5" /> },
    { id: 3, name: 'Shirts', icon: <Shirt className="h-5 w-5" /> },
    { id: 4, name: 'Accessories', icon: <Watch className="h-5 w-5" /> },
    { id: 5, name: 'Suits', icon: <User className="h-5 w-5" /> },
    { id: 6, name: 'Dresses', icon: <ShoppingBag className="h-5 w-5" /> },
    { id: 7, name: 'Pants', icon: <Shirt className="h-5 w-5" /> },
    { id: 8, name: 'Outerwear', icon: <User className="h-5 w-5" /> },
    { id: 9, name: 'Traditional', icon: <Home className="h-5 w-5" /> },
    { id: 10, name: 'Formal Wear', icon: <User className="h-5 w-5" /> },
    { id: 11, name: 'Casual Wear', icon: <Shirt className="h-5 w-5" /> },
    { id: 12, name: 'Winter Collection', icon: <Snowflake className="h-5 w-5" /> },
    { id: 13, name: 'Footwear', icon: <Footprints className="h-5 w-5" /> },
    { id: 14, name: 'Sportswear', icon: <Activity className="h-5 w-5" /> },
    { id: 15, name: 'Fitness', icon: <Activity className="h-5 w-5" /> },
    { id: 16, name: 'Electronics', icon: <Laptop className="h-5 w-5" /> },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleCategoryClick = (categoryName: string) => {
    console.log(`Category clicked: ${categoryName}`);
    onCategorySelect(categoryName);
  };

  return (
    <div className="relative" ref={menuRef}>
      {/* Categories Button - Left Aligned */}
      <Button
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 border-brown-300 text-brown-700 hover:bg-brown-50 hover:text-brown-900 hover:border-brown-400 rounded-full px-5 py-2"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        <span className="font-medium">Browse Categories</span>
        {selectedCategories.length > 0 && (
          <div className="h-6 w-6 rounded-full bg-yellow-500 text-brown-900 text-xs flex items-center justify-center">
            {selectedCategories.length}
          </div>
        )}
      </Button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-12 left-0 w-64 bg-white rounded-xl shadow-2xl border border-brown-200 z-50 overflow-hidden">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-yellow-50 to-brown-50 border-b border-brown-100">
            <h3 className="font-bold text-brown-900">Shop by Category</h3>
            <p className="text-sm text-brown-600">Select multiple categories</p>
          </div>

          {/* Categories List */}
          <div className="max-h-80 overflow-y-auto">
            {/* "All" option to clear filters */}
            <button
              onClick={() => {
                // We'll pass an empty string to indicate clearing all
                onCategorySelect('');
              }}
              className={`w-full flex items-center space-x-3 p-4 transition-colors border-b border-brown-100 hover:bg-brown-50 ${
                selectedCategories.length === 0 ? 'bg-yellow-50' : ''
              }`}
            >
              <div className="h-10 w-10 rounded-lg bg-brown-100 flex items-center justify-center text-brown-700">
                <span>All</span>
              </div>
              <span className="font-medium text-brown-900 text-left flex-1">
                All Products
              </span>
              {selectedCategories.length === 0 && (
                <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
              )}
            </button>

            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.name)}
                className={`w-full flex items-center space-x-3 p-4 hover:bg-brown-50 transition-colors border-b border-brown-100 last:border-b-0 ${
                  selectedCategories.includes(category.name) ? 'bg-yellow-50' : ''
                }`}
              >
                <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${
                  selectedCategories.includes(category.name) 
                    ? 'bg-yellow-200 text-brown-800' 
                    : 'bg-yellow-100 text-brown-700'
                }`}>
                  {category.icon}
                </div>
                <span className="font-medium text-brown-900 text-left flex-1">
                  {category.name}
                </span>
                {selectedCategories.includes(category.name) && (
                  <div className="h-6 w-6 rounded-full bg-yellow-500 text-brown-900 text-xs flex items-center justify-center">
                    ✓
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Footer */}
          <div className="p-4 bg-brown-50">
            <div className="flex flex-col gap-2">
              <div className="text-sm text-brown-600 mb-2">
                {selectedCategories.length} category(s) selected
              </div>
              <Button 
                onClick={() => {
                  setIsOpen(false);
                }}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-brown-900 rounded-full"
              >
                Close Menu
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryMenu;