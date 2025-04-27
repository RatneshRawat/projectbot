import React, { useState } from 'react';
import { destinations } from '../data/destinations';
import DestinationFilters from '../components/Destinations/DestinationFilters';
import DestinationCard from '../components/Destinations/DestinationCard';

export type FilterOptions = {
  region: string;
  type: string;
};

const DestinationsPage: React.FC = () => {
  const [filters, setFilters] = useState<FilterOptions>({
    region: 'all',
    type: 'all'
  });
  
  const filteredDestinations = destinations.filter(destination => {
    if (filters.region !== 'all' && destination.region !== filters.region) {
      return false;
    }
    if (filters.type !== 'all' && destination.type !== filters.type) {
      return false;
    }
    return true;
  });

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#000080] mb-4">Explore Destinations</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the diverse landscapes, rich culture, and amazing experiences that India has to offer.
          </p>
        </div>
        
        <DestinationFilters filters={filters} setFilters={setFilters} />
        
        {filteredDestinations.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
            {filteredDestinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl text-gray-600">No destinations found matching your filters.</h3>
            <button 
              className="mt-4 px-6 py-2 bg-[#FF9933] text-white font-medium rounded-lg"
              onClick={() => setFilters({ region: 'all', type: 'all' })}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DestinationsPage;