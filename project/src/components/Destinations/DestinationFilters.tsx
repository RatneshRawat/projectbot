import React from 'react';
import { FilterOptions } from '../../pages/DestinationsPage';

type DestinationFiltersProps = {
  filters: FilterOptions;
  setFilters: React.Dispatch<React.SetStateAction<FilterOptions>>;
};

const regions = [
  { value: 'all', label: 'All Regions' },
  { value: 'north', label: 'North India' },
  { value: 'south', label: 'South India' },
  { value: 'east', label: 'East India' },
  { value: 'west', label: 'West India' },
  { value: 'central', label: 'Central India' },
  { value: 'northeast', label: 'Northeast India' }
];

const types = [
  { value: 'all', label: 'All Types' },
  { value: 'temple', label: 'Temples' },
  { value: 'beach', label: 'Beaches' },
  { value: 'wildlife', label: 'Wildlife' },
  { value: 'fort', label: 'Forts' },
  { value: 'mountain', label: 'Mountains' },
  { value: 'city', label: 'Cities' }
];

const DestinationFilters: React.FC<DestinationFiltersProps> = ({ filters, setFilters }) => {
  const handleFilterChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    filterType: 'region' | 'type'
  ) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: event.target.value
    }));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Filter Destinations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="region-filter" className="block text-sm font-medium text-gray-700 mb-1">
            Region
          </label>
          <select
            id="region-filter"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF9933] focus:border-transparent"
            value={filters.region}
            onChange={(e) => handleFilterChange(e, 'region')}
          >
            {regions.map((region) => (
              <option key={region.value} value={region.value}>
                {region.label}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="type-filter" className="block text-sm font-medium text-gray-700 mb-1">
            Type
          </label>
          <select
            id="type-filter"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF9933] focus:border-transparent"
            value={filters.type}
            onChange={(e) => handleFilterChange(e, 'type')}
          >
            {types.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="mt-4 text-right">
        <button 
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
          onClick={() => setFilters({ region: 'all', type: 'all' })}
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default DestinationFilters;