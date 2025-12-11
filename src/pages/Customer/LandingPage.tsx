import { useState } from 'react';
import Header from '../../components/Header';
import CategoryMenu from '../../components/CategoryMenu';
import RecentItems from '../../components/RecentItems';

function LandingPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [searchQuery, setSearchQuery] = useState('');

  const handleCategorySelect = (category: string) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(c => c !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  const removeCategory = (category: string) => {
    setSelectedCategories(prev => prev.filter(c => c !== category));
  };

  const clearAllCategories = () => {
    setSelectedCategories([]);
  };
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // You can also reset categories when searching if needed
    // setSelectedCategories([]);
  };

  return (
    <div>
      <Header 
              onSearch={handleSearch}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}/>
      {/* Container for CategoryMenu and RecentItems */}
      <div className="container mx-auto px-4">
        {/* CategoryMenu positioned to the left, above RecentItems */}
        <div className="py-4 border-b border-brown-100">
          <div className="flex justify-start items-center flex-wrap gap-4">
            <CategoryMenu 
              onCategorySelect={handleCategorySelect} 
              selectedCategories={selectedCategories} 
            />
            
            {/* Show selected categories badges */}
            <div className="flex flex-wrap items-center gap-2">
              {selectedCategories.length > 0 && (
                <>
                  <span className="text-brown-600 text-sm">Filtering by:</span>
                  {selectedCategories.map(category => (
                    <div 
                      key={category}
                      className="bg-yellow-100 text-brown-800 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2"
                    >
                      {/* Category icon will be passed from CategoryMenu */}
                      <span>{category}</span>
                      <button 
                        onClick={() => removeCategory(category)}
                        className="ml-1 text-brown-600 hover:text-brown-900 hover:scale-110 transition-transform"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                  <button
                    onClick={clearAllCategories}
                    className="text-sm text-brown-500 hover:text-brown-800 hover:underline"
                  >
                    Clear all
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
        {/* RecentItems section with category filter */}
        <RecentItems selectedCategories={selectedCategories}
                  searchQuery={searchQuery} />
      </div>
    </div>
  )
}

export default LandingPage;