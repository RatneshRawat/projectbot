import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: 'url("https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          backgroundPosition: '50% 50%'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 z-0"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Discover the Wonders of <span className="text-[#FF9933]">India</span>
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Explore ancient temples, vibrant cultures, pristine beaches, and breathtaking landscapes with your AI-powered tour guide.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/destinations" 
              className="px-8 py-3 bg-[#FF9933] text-white font-medium rounded-lg inline-flex items-center transition-transform hover:scale-105"
            >
              Explore Destinations
              <ArrowRight size={20} className="ml-2" />
            </Link>
            <button 
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => {
                // Scroll to featured section
                document.getElementById('featured')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              See Featured Places
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white animate-bounce">
        <span className="text-sm mb-2">Scroll Down</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
};

export default Hero;