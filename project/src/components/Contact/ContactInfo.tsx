import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="bg-white p-8 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h2>
        
        <ul className="space-y-6">
          <li className="flex">
            <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-[#000080]/10">
              <MapPin size={20} className="text-[#000080]" />
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-medium text-gray-800">Address</h4>
              <p className="text-gray-600">
                123 Tourism Street, New Delhi<br />
                India - 110001
              </p>
            </div>
          </li>
          
          <li className="flex">
            <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-[#000080]/10">
              <Phone size={20} className="text-[#000080]" />
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-medium text-gray-800">Phone</h4>
              <p className="text-gray-600">
                <a href="tel:+919876543210" className="hover:text-[#FF9933]">+91 9876543210</a>
              </p>
            </div>
          </li>
          
          <li className="flex">
            <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-[#000080]/10">
              <Mail size={20} className="text-[#000080]" />
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-medium text-gray-800">Email</h4>
              <p className="text-gray-600">
                <a href="mailto:info@indiatourguide.com" className="hover:text-[#FF9933]">info@indiatourguide.com</a>
              </p>
            </div>
          </li>
          
          <li className="flex">
            <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-[#000080]/10">
              <Clock size={20} className="text-[#000080]" />
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-medium text-gray-800">Working Hours</h4>
              <p className="text-gray-600">
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 4:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </li>
        </ul>
      </div>
      
      <div className="bg-[#000080] text-white p-8 rounded-lg shadow-md flex-grow">
        <div className="flex items-center mb-6">
          <MessageSquare size={24} className="mr-2" />
          <h3 className="text-xl font-semibold">Instant Help with Our AI Guide</h3>
        </div>
        
        <p className="mb-6">
          Get immediate answers to your travel questions 24/7 with our AI-powered India Tour Guide chatbot.
        </p>
        
        <button 
          className="w-full py-3 bg-[#FF9933] text-white font-medium rounded-md hover:bg-[#FF9933]/90 transition-colors"
          onClick={() => {
            // Trigger the chatbot
            document.getElementById('chatbot-trigger')?.click();
          }}
        >
          Chat Now
        </button>
      </div>
    </div>
  );
};

export default ContactInfo;