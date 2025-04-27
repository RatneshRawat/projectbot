import React from 'react';
import { MessageSquare, MapPin, Calendar, Shield } from 'lucide-react';

const features = [
  {
    icon: <MessageSquare size={40} className="text-[#FF9933]" />,
    title: 'AI-Powered Guide',
    description: 'Get instant answers to all your travel questions with our smart chatbot that knows everything about India.'
  },
  {
    icon: <MapPin size={40} className="text-[#FF9933]" />,
    title: 'Insider Knowledge',
    description: 'Discover hidden gems and offbeat locations that most tourists miss out on.'
  },
  {
    icon: <Calendar size={40} className="text-[#FF9933]" />,
    title: 'Trip Planning',
    description: 'Get personalized itineraries based on your interests, time, and budget.'
  },
  {
    icon: <Shield size={40} className="text-[#FF9933]" />,
    title: 'Travel Safety',
    description: 'Stay informed about local customs, safety tips, and best practices for a worry-free journey.'
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#000080] mb-4">Why Choose IndiaTour Guide</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our AI-powered assistant makes planning your Indian adventure easier and more enjoyable than ever before.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center transition-transform hover:scale-105">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FF9933]/10 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-[#000080] rounded-lg shadow-lg text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to explore India?</h3>
          <p className="text-lg mb-6">Ask our AI guide any question about Indian travel and get instant, accurate answers!</p>
          <button 
            className="px-8 py-3 bg-[#FF9933] text-white font-medium rounded-lg hover:bg-[#FF9933]/90 transition-colors"
            onClick={() => {
              // This would trigger the chatbot to open
              document.getElementById('chatbot-trigger')?.click();
            }}
          >
            Chat with IndiaTour Guide
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;