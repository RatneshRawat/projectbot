import React from 'react';
import { Destination } from '../../types/destination';

type DestinationCardProps = {
  destination: Destination;
};

const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl">
      <div className="h-56 overflow-hidden">
        <img 
          src={destination.image} 
          alt={destination.name}
          className="w-full h-full object-cover transition-transform hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <span 
            className={`inline-block px-3 py-1 text-xs font-semibold rounded-full
            ${destination.type === 'temple' ? 'bg-purple-100 text-purple-800' : ''}
            ${destination.type === 'beach' ? 'bg-blue-100 text-blue-800' : ''}
            ${destination.type === 'wildlife' ? 'bg-green-100 text-green-800' : ''}
            ${destination.type === 'fort' ? 'bg-amber-100 text-amber-800' : ''}
            ${destination.type === 'mountain' ? 'bg-teal-100 text-teal-800' : ''}
            ${destination.type === 'city' ? 'bg-gray-100 text-gray-800' : ''}
            `}
          >
            {destination.type.charAt(0).toUpperCase() + destination.type.slice(1)}
          </span>
          <span className="text-sm font-medium text-gray-600">
            {destination.region.charAt(0).toUpperCase() + destination.region.slice(1)} India
          </span>
        </div>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{destination.name}</h3>
        
        <p className="text-gray-600 mb-4 flex items-center">
          <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {destination.location}
        </p>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {destination.description}
        </p>
        
        <button 
          className="w-full py-2 bg-[#000080] text-white font-medium rounded-md hover:bg-[#000080]/90 transition-colors"
          onClick={() => {
            // Open chatbot with a prefilled query about this destination
            const chatbotBtn = document.getElementById('chatbot-trigger');
            if (chatbotBtn) {
              chatbotBtn.click();
              // This would ideally set a prefilled message in the chatbot
              // We'll implement this functionality in the chatbot component
            }
          }}
        >
          Ask About This Place
        </button>
      </div>
    </div>
  );
};

export default DestinationCard;