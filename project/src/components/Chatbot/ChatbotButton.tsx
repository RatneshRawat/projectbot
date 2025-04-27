import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import ChatbotPanel from './ChatbotPanel';

const ChatbotButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <>
      <button
        id="chatbot-trigger"
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all duration-300 ${
          isOpen ? 'bg-white text-[#000080]' : 'bg-[#000080] text-white'
        }`}
        onClick={toggleChatbot}
        aria-label={isOpen ? 'Close chatbot' : 'Open chatbot'}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
      
      <ChatbotPanel isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default ChatbotButton;