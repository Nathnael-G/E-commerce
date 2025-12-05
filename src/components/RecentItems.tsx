import React from 'react';
import { Button } from '../components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
} from '../components/ui/card';
import { ShoppingBag, ArrowRight } from 'lucide-react';

const RecentItems = () => {
  // Mock items data
  const mockItems = [
    { id: 1, name: 'Premium Business Suit', price: 8999, category: 'Suits' },
    { id: 2, name: 'Evening Gown', price: 7499, category: 'Dresses' },
    { id: 3, name: 'Casual Linen Shirt', price: 2499, category: 'Shirts' },
    { id: 4, name: 'Leather Dress Shoes', price: 5499, category: 'Accessories' },
    { id: 5, name: 'Tailored Blazer', price: 5999, category: 'Suits' },
    { id: 6, name: 'Silk Scarf', price: 1299, category: 'Accessories' },
    { id: 7, name: 'Summer Dress', price: 3999, category: 'Dresses' },
    { id: 8, name: 'Formal Trousers', price: 3299, category: 'Pants' },
    { id: 9, name: 'Designer Handbag', price: 11999, category: 'Accessories' },
    { id: 10, name: 'Winter Coat', price: 8999, category: 'Outerwear' },
    { id: 11, name: 'Casual Jacket', price: 4499, category: 'Outerwear' },
    { id: 12, name: 'Evening Purse', price: 2799, category: 'Accessories' },
  ];

  const handleBuyNow = (itemId: number, itemName: string) => {
    console.log(`Buy Now clicked for item ${itemId}: ${itemName}`);
  };

  return (
    <div className="py-8">
      {/* Section Header with animation */}
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-brown-900 mb-3 animate-fade-in">
          Recent Items
        </h2>
        <p className="text-brown-600 animate-fade-in-up delay-100">
          Discover our latest tailored creations
        </p>
      </div>

      {/* Items Grid with staggered animation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mockItems.map((item, index) => (
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
            <div className="h-40 bg-gradient-to-br from-brown-50 via-yellow-50 to-brown-100 relative overflow-hidden">
              {/* Shine animation overlay */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              
              {/* Category Badge with hover effect */}
              <div className="absolute top-3 left-3 z-10">
                <span className="bg-white/90 backdrop-blur-sm text-brown-800 text-xs font-semibold px-3 py-1 rounded-full shadow-sm group-hover:bg-yellow-100 group-hover:scale-110 transition-all duration-300">
                  {item.category}
                </span>
              </div>
              
              {/* Placeholder Icon with bounce */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-20 w-20 rounded-full bg-white/40 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/60 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <ShoppingBag className="h-10 w-10 text-brown-700/80 group-hover:text-yellow-600 transition-all duration-500 group-hover:scale-110" />
                </div>
              </div>
            </div>

            {/* Card Content */}
            <CardContent className="p-5 relative z-10">
              {/* Item Name with gradient text on hover */}
              <h3 className="font-bold text-brown-900 text-base mb-4 line-clamp-2 min-h-[3rem] transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brown-800 group-hover:to-yellow-600">
                {item.name}
              </h3>
            </CardContent>

            {/* Card Footer */}
            <CardFooter className="p-5 pt-0 relative z-10">
              <div className="w-full space-y-3">
                {/* Price with pulse animation on hover */}
                <div className="text-center">
                  <div className="text-xl font-bold text-brown-900 transition-all duration-300 group-hover:scale-105 group-hover:text-yellow-700">
                    {item.price.toLocaleString()} ETB
                  </div>
                  <div className="text-xs text-brown-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Free shipping
                  </div>
                </div>
                
                {/* Buy Now Button with animated arrow */}
                <Button
                  onClick={() => handleBuyNow(item.id, item.name)}
                  className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-brown-900 rounded-lg text-sm font-semibold py-2.5 transition-all duration-300 group-hover:shadow-lg hover:scale-[1.02] relative overflow-hidden"
                >
                  {/* Button shine effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                  
                  <span className="relative z-10">Buy Now</span>
                  <ArrowRight className="ml-2 h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </CardFooter>

            {/* Quick View Hint (appears on hover) */}
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
              <div className="bg-white/90 backdrop-blur-sm text-brown-700 text-xs px-2 py-1 rounded-full">
                Quick View
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* View All Button with animation */}
      <div className="text-center mt-12 animate-fade-in-up delay-1000">
        <Button
          variant="outline"
          className="group border-brown-300 text-brown-700 hover:bg-brown-50 hover:text-brown-900 hover:border-brown-400 rounded-full px-8 py-5 text-sm relative overflow-hidden"
        >
          {/* Background animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          
          <ShoppingBag className="mr-2 h-5 w-5 relative z-10 group-hover:scale-110 transition-transform duration-300" />
          <span className="relative z-10">View All Products</span>
          <ArrowRight className="ml-2 h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </div>
    </div>
  );
};

export default RecentItems;