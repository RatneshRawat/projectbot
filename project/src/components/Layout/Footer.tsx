import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#000080] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4">IndiaTour Guide</h3>
            <p className="mb-4">Your Smart AI Guide to India's Wonders! 🇮🇳✨</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#FF9933] transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-[#FF9933] transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-[#FF9933] transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-[#FF9933] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/destinations" className="hover:text-[#FF9933] transition-colors">Destinations</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#FF9933] transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin size={20} className="mr-2" />
                <span>New Delhi, India</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2" />
                <span>+91 9876543210</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2" />
                <span>info@indiatourguide.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} IndiaTour Guide Bot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;