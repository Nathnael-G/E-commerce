import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  const handleSignIn = () => {
    navigate('/login');
    setIsAuthenticated(true);
    console.log('User signed in');
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
                <span className="text-2xl font-bold text-brown-900 tracking-tight">Seya</span>
              </div>
              <span className="text-lg font-semibold text-brown-800 tracking-wider">Tailoring</span>
              
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
                  className="w-full pl-12 pr-4 py-6 rounded-full border-brown-200 bg-brown-50/50 focus:bg-white focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-200"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </form>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center space-x-3">
            {/* Cart Icon */}
            <Button
              variant="ghost"
              size="icon"
              className="relative text-brown-700 hover:text-brown-900 hover:bg-brown-50 rounded-full h-10 w-10 transition-colors"
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
                <>
                  <Button
                    variant="outline"
                    className="border-brown-300 text-brown-700 hover:bg-brown-50 hover:text-brown-900 hover:border-brown-400 rounded-full px-5"
                    onClick={handleSignIn}
                  >
                    <span className="font-medium">Sign In</span>
                  </Button>
                  <Button
                    className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-brown-900 hover:from-yellow-600 hover:to-yellow-700 rounded-full px-5 shadow-sm hover:shadow transition-all duration-200"
                    onClick={handleSignIn}
                  >
                    <span className="font-medium">Sign Up</span>
                  </Button>
                </>
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
                className="w-full pl-12 pr-4 py-4 rounded-full border-brown-200 bg-brown-50/50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;