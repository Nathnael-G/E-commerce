import { Button } from '../components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
} from '../components/ui/card';
import { ShoppingBag, Filter, ShoppingCart, Tag } from 'lucide-react';

interface RecentItemsProps {
  selectedCategory?: string | null;
}

const RecentItems = ({ selectedCategory }: RecentItemsProps) => {
  // Mock items data
  const mockItems = [
    { 
      id: 1, 
      name: 'Hershey\'s Chocolate Syrup', 
      price: 299, 
      category: 'Food & Beverages', 
      discount: 15,
      image: '/doc_2025-12-08_12-50-01.webp'
    },
    { 
      id: 2, 
      name: 'Aptamil Baby Formula', 
      price: 7499, 
      category: 'Baby Products',
      image: '/photo_2025-12-07_10-43-52.jpg' 
    },
    { id: 3, name: 'Casual Linen Shirt', price: 2499, category: 'Shirts', image: `doc_2025-12-08_13-04-47.webp` },
    { id: 4, name: 'Leather Dress Shoes', price: 5499, category: 'Accessories', discount: 21, image: `marketing_view_color_front_content_hub_11786936_eced189ec5c0218.png` },
    { id: 5, name: 'Tailored Blazer', price: 5999, category: 'Suits',image: `ACV_Liquid_16oz_Transparent_Front_a6de13bb_4cfc_471c_be7d_060e5b9948a3.png` },
    { id: 6, name: 'Silk Scarf', price: 1299, category: 'Accessories', discount: 19, image: `71slAAUyxDL._SL1500_.jpg` },
    { id: 7, name: 'Summer Dress', price: 3999, category: 'Dresses', discount: 20, image: `5-1-600x800.jpg` },
    { id: 8, name: 'Formal Trousers', price: 3299, category: 'Pants', discount: 18, image: `14-600x600.jpg` },
    { id: 9, name: 'Designer Handbag', price: 11999, category: 'Accessories', image: `BD4rYo15QcJxpng-optimized.jpg` },
    { id: 10, name: 'Winter Coat', price: 8999, category: 'Outerwear', discount: 18 },
    { id: 11, name: 'Casual Jacket', price: 4499, category: 'Outerwear', discount: 18 },
    { id: 12, name: 'Evening Purse', price: 2799, category: 'Accessories' },
    { id: 13, name: 'Traditional Gown', price: 9999, category: 'Traditional', discount: 17 },
    { id: 14, name: 'Formal Suit', price: 6999, category: 'Formal Wear', discount: 18 },
    { id: 15, name: 'Casual T-shirt', price: 1499, category: 'Casual Wear', discount: 21 },
    { id: 16, name: 'Winter Scarf', price: 1999, category: 'Winter Collection', discount: 20 },
  ];

  const handleBuyNow = (itemId: number, itemName: string) => {
    console.log(`Buy Now clicked for item ${itemId}: ${itemName}`);
  };

  // Filter items by selected category
  const filteredItems = selectedCategory
    ? mockItems.filter(item => item.category === selectedCategory)
    : mockItems;

  // If no items found for the selected category
  if (filteredItems.length === 0 && selectedCategory) {
    return (
      <div className="py-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-brown-900 mb-3">Recent Items</h2>
          <p className="text-brown-600">Discover our latest shopping Items</p>
        </div>
        
        <div className="text-center py-12 bg-brown-50 rounded-xl">
          <Filter className="h-12 w-12 text-brown-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-brown-800 mb-2">No items found</h3>
          <p className="text-brown-600 mb-6">
            No items found in category "<span className="font-semibold text-yellow-600">{selectedCategory}</span>"
          </p>
          <Button
            variant="outline"
            className="border-brown-300 text-brown-700 hover:bg-brown-50 hover:text-brown-900 rounded-full px-6"
            onClick={() => window.location.reload()}
          >
            View All Products
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8">
      {/* Section Header with filter info */}
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-brown-900 mb-3">
          {selectedCategory ? `${selectedCategory} Items` : 'Recent Items'}
        </h2>
        <p className="text-brown-600">
          {selectedCategory 
            ? `Showing ${filteredItems.length} items in ${selectedCategory}`
            : 'Discover our latest tailored creations'
          }
        </p>
        
        {/* Filter indicator */}
        {selectedCategory && (
          <div className="mt-4 inline-flex items-center bg-yellow-50 px-4 py-2 rounded-full">
            <span className="text-sm text-brown-700">
              Filtered by: <span className="font-semibold text-yellow-600">{selectedCategory}</span>
            </span>
          </div>
        )}
      </div>

      {/* Items Grid with staggered animation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredItems.map((item, index) => (
          <Card 
            key={item.id} 
            className="group relative overflow-hidden border-0 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Gradient border effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 via-brown-400 to-yellow-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10"></div>
            
            {/* Glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-brown-600 rounded-xl opacity-0 group-hover:opacity-20 blur-md transition-all duration-500 group-hover:duration-300 -z-20"></div>
            
            {/* Image Placeholder with shine effect */}
            <div className="h-60 relative overflow-hidden">
              {/* Shine animation overlay */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent z-10"></div>
              
              {/* Actual product image or gradient background */}
              {item.image ? (
                // Items with actual images
                <div className="absolute inset-0 bg-brown-50">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brown-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              ) : (
                // Original gradient background for items without images
                <div className="h-full bg-gradient-to-br from-brown-50 via-yellow-50 to-brown-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-20 w-20 rounded-full bg-white/40 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/60 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                      <ShoppingBag className="h-10 w-10 text-brown-700/80 group-hover:text-yellow-600 transition-all duration-500 group-hover:scale-110" />
                    </div>
                  </div>
                </div>
              )}
              
              {/* Discount Badge - Only visible on hover and only if item has discount */}
              {item.discount && (
                <div className="absolute top-3 right-3 z-20">
                  <div className="transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <div className="relative">
                      {/* Animated pulse effect */}
                      <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-30"></div>
                      
                      {/* Main badge */}
                      <div className="relative bg-gradient-to-br from-red-500 to-red-600 text-white px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                        <Tag className="h-3.5 w-3.5" />
                        <span className="text-xs font-bold">{item.discount}% OFF</span>
                      </div>
                      
                      {/* Ribbon tail effect */}
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-red-600"></div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Category Badge with hover effect */}
              <div className="absolute top-3 left-3 z-10">
                <span className="bg-white/90 backdrop-blur-sm text-brown-800 text-xs font-semibold px-3 py-1 rounded-full shadow-sm group-hover:bg-yellow-100 group-hover:scale-110 transition-all duration-300">
                  {item.category}
                </span>
              </div>
            </div>

            {/* Card Content */}
            <CardContent className="relative z-10">
              {/* Item Name with gradient text on hover */}
              <h3 className="font-bold text-brown-900 text-base line-clamp-2 min-h-[3rem] transition-all duration-300 group-hover:text-white">
                {item.name}
              </h3>
            </CardContent>

            {/* Card Footer */}
            <CardFooter className="p-5 pt-0 relative z-10">
              <div className="w-full space-y-3">
                {/* Buy Now Button with animated arrow */}
                <div className='flex items-center justify-between'>
                <Button
                  onClick={() => handleBuyNow(item.id, item.name)}
                  className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-brown-900 rounded-lg text-sm font-semibold py-2.5 transition-all duration-300 group-hover:shadow-lg hover:scale-[1.02] relative overflow-hidden"
                >
                  {/* Button shine effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                  
                  <span className="relative z-10">Add to cart</span>
                  <ShoppingCart className="ml-2 h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <div className="text-xl font-bold text-brown-900 transition-all duration-300 group-hover:scale-105 group-hover:text-yellow-700">
                    {item.price.toLocaleString()} ETB
                  </div>
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

    </div>
  );
};

export default RecentItems;