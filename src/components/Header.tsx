import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

interface HeaderProps {
  onSearch?: (query: string) => void;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
}

const Header = ({ onSearch, searchQuery: propSearchQuery, onSearchChange }: HeaderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [internalSearchQuery, setInternalSearchQuery] = useState('');

  // Use prop if provided, otherwise use internal state
  const searchQuery = propSearchQuery !== undefined ? propSearchQuery : internalSearchQuery;
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    } else {
      console.log('Searching for:', searchQuery);
    }
  };

  const handleSearchChange = (value: string) => {
    if (onSearchChange) {
      onSearchChange(value);
    } else {
      setInternalSearchQuery(value);
    }
    
    // Optional: If you want to search as you type, uncomment this:
    // if (onSearch) {
    //   onSearch(value);
    // }
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
    console.log('User signed out');
  };


  return (
    <header className="sticky top-0 z-50 w-full border-b border-brown-200 bg-white/90 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Left: Company Name in 2 lines with brown and yellow */}
          <div className="flex items-center">
            <div className="flex flex-col leading-tight">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-yellow-600 tracking-tight">Loga</span>
              </div>
            </div>
          </div>

          {/* Center: Search Bar - Desktop (without categories) */}
          <div className="hidden lg:flex flex-1 max-w-xl mx-8">
            <form onSubmit={handleSearch} className="relative w-full">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-brown-400 h-4 w-4" />
                <Input
                  type="search"
                  placeholder="Search suits, dresses, accessories..."
                  className="w-full pl-12 pr-12 py-6 rounded-full border-brown-200 bg-brown-50/50 focus:bg-white focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-200"
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                />
              </div>
            </form>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center space-x-3">
            {/* Cart Icon */}
            <Button
              variant="outline"
              size="icon"
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-brown-900 hover:from-yellow-600 hover:to-yellow-700 rounded-full shadow-sm hover:shadow transition-all duration-200"
            >
              <ShoppingCart className="h-5 w-5" />
            </Button>

            {/* Auth Section - Only Sign In/Sign Up buttons */}
            <div className="flex items-center space-x-2">
              {isAuthenticated ? (
                <Button
                  variant="outline"
                  className="border-brown-300 text-brown-700 hover:bg-brown-50 hover:text-brown-900 hover:border-brown-400 rounded-full px-5"
                  onClick={handleSignOut}
                >
                  <span className="font-medium">Sign Out</span>
                </Button>
              ) : (
                <h2 className="text-xl font-bold text-brown-900">Dashboard</h2>
              )}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-brown-700 hover:text-brown-900 hover:bg-brown-50 rounded-full h-10 w-10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-brown-100 bg-white/95 backdrop-blur-sm">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-brown-400 h-4 w-4" />
              <Input
                type="search"
                placeholder="Search items..."
                className="w-full pl-12 pr-12 py-4 rounded-full border-brown-200 bg-brown-50/50"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
              />
            </form>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;