import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Shirt, ShoppingBag, Watch, User } from 'lucide-react';
import { Button } from '../components/ui/button';

interface CategoryMenuProps {
  onCategorySelect: (category: string) => void;
  selectedCategory: string | null;
}

const CategoryMenu = ({ onCategorySelect, selectedCategory }: CategoryMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Categories using available icons
  const categories = [
    { id: 1, name: 'Suits', icon: <User className="h-5 w-5" /> },
    { id: 2, name: 'Dresses', icon: <ShoppingBag className="h-5 w-5" /> },
    { id: 3, name: 'Shirts', icon: <Shirt className="h-5 w-5" /> },
    { id: 4, name: 'Accessories', icon: <Watch className="h-5 w-5" /> },
    { id: 5, name: 'Casual Wear', icon: <Shirt className="h-5 w-5" /> },
    { id: 6, name: 'Formal Wear', icon: <User className="h-5 w-5" /> },
    { id: 7, name: 'Traditional', icon: <ShoppingBag className="h-5 w-5" /> },
    { id: 8, name: 'Winter Collection', icon: <Watch className="h-5 w-5" /> },
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
    setIsOpen(false);
  };

  // Clear all filters
  const handleClearFilters = () => {
    onCategorySelect('');
    setIsOpen(false);
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
        {selectedCategory && (
          <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
        )}
      </Button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-12 left-0 w-64 bg-white rounded-xl shadow-2xl border border-brown-200 z-50 overflow-hidden">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-yellow-50 to-brown-50 border-b border-brown-100">
            <h3 className="font-bold text-brown-900">Shop by Category</h3>
            <p className="text-sm text-brown-600">Select a category to explore</p>
          </div>

          {/* Categories List */}
          <div className="max-h-80 overflow-y-auto">
            {/* "All" option to clear filters */}
            <button
              onClick={handleClearFilters}
              className={`w-full flex items-center space-x-3 p-4 transition-colors border-b border-brown-100 hover:bg-brown-50 ${
                !selectedCategory ? 'bg-yellow-50' : ''
              }`}
            >
              <div className="h-10 w-10 rounded-lg bg-brown-100 flex items-center justify-center text-brown-700">
                <span>All</span>
              </div>
              <span className="font-medium text-brown-900 text-left flex-1">
                All Products
              </span>
              {!selectedCategory && (
                <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
              )}
            </button>

            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.name)}
                className={`w-full flex items-center space-x-3 p-4 hover:bg-brown-50 transition-colors border-b border-brown-100 last:border-b-0 ${
                  selectedCategory === category.name ? 'bg-yellow-50' : ''
                }`}
              >
                <div className="h-10 w-10 rounded-lg bg-yellow-100 flex items-center justify-center text-brown-700">
                  {category.icon}
                </div>
                <span className="font-medium text-brown-900 text-left flex-1">
                  {category.name}
                </span>
                {selectedCategory === category.name && (
                  <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                )}
              </button>
            ))}
          </div>

          {/* Footer */}
          <div className="p-4 bg-brown-50">
            {selectedCategory ? (
              <Button 
                onClick={handleClearFilters}
                className="w-full bg-brown-200 hover:bg-brown-300 text-brown-800 rounded-full"
              >
                Clear Filter
              </Button>
            ) : (
              <Button 
                onClick={() => setIsOpen(false)}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-brown-900 rounded-full"
              >
                Close Menu
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryMenu;