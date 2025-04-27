import React from 'react';
import { Link } from 'react-router-dom';

type FeaturedDestination = {
  id: number;
  name: string;
  image: string;
  location: string;
  type: string;
};

const featuredDestinations: FeaturedDestination[] = [
  {
    id: 1,
    name: 'Taj Mahal',
    image: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg',
    location: 'Agra, Uttar Pradesh',
    type: 'Monument'
  },
  {
    id: 2,
    name: 'Jaisalmer Fort',
    image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
    location: 'Jaisalmer, Rajasthan',
    type: 'Fort'
  },
  {
    id: 3,
    name: 'Varkala Beach',
    image: 'https://images.pexels.com/photos/1710795/pexels-photo-1710795.jpeg',
    location: 'Kerala',
    type: 'Beach'
  },
  {
    id: 4,
    name: 'Jim Corbett National Park',
    image: 'https://images.pexels.com/photos/39857/leopard-leopard-spots-animal-wild-39857.jpeg',
    location: 'Uttarakhand',
    type: 'Wildlife'
  }
];

const FeaturedDestinations: React.FC = () => {
  return (
    <section id="featured" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#000080] mb-4">Featured Destinations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover some of India's most iconic places that combine rich heritage, 
            natural beauty, and unforgettable experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredDestinations.map((destination) => (
            <div 
              key={destination.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-[#138808]/10 text-[#138808] text-xs font-semibold rounded-full mb-2">
                  {destination.type}
                </span>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{destination.name}</h3>
                <p className="text-gray-600 mb-4 flex items-center">
                  <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {destination.location}
                </p>
                <Link 
                  to={`/destinations`} 
                  className="text-[#FF9933] font-medium hover:underline inline-flex items-center"
                >
                  Explore More
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/destinations" 
            className="px-8 py-3 bg-[#000080] text-white font-medium rounded-lg inline-flex items-center hover:bg-[#000080]/90 transition-colors"
          >
            View All Destinations
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;