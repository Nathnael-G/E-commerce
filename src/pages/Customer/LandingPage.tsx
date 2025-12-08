import { useState } from 'react';
import Header from '../../components/Header';
import CategoryMenu from '../../components/CategoryMenu';
import RecentItems from '../../components/RecentItems';

function LandingPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  return (
    <div>
      <Header />
      {/* Container for CategoryMenu and RecentItems */}
      <div className="container mx-auto px-4">
        {/* CategoryMenu positioned to the left, above RecentItems */}
        <div className="py-4 border-b border-brown-100">
          <div className="flex justify-start items-center">
            <CategoryMenu 
              onCategorySelect={handleCategorySelect} 
              selectedCategory={selectedCategory} 
            />
            
            {/* Show selected category badge */}
            {selectedCategory && (
              <div className="ml-4 flex items-center space-x-2">
                <span className="text-brown-600 text-sm">Filtering by:</span>
                <div className="bg-yellow-100 text-brown-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  {selectedCategory}
                  <button 
                    onClick={() => setSelectedCategory(null)}
                    className="ml-2 text-brown-600 hover:text-brown-900 hover:scale-110 transition-transform"
                  >
                    ×
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* RecentItems section with category filter */}
        <RecentItems selectedCategory={selectedCategory} />
      </div>
    </div>
  )
}

export default LandingPage;