import React from 'react';
import { Message } from '../../types/chatbot';

type ChatMessageProps = {
  message: Message;
};

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isBot = message.sender === 'bot';
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  // Format message text with line breaks, links, etc.
  const formatMessageText = (text: string) => {
    // Convert URLs to clickable links
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const textWithLinks = text.replace(urlRegex, (url) => {
      return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">${url}</a>`;
    });
    
    // Replace line breaks with <br> tags
    return textWithLinks.replace(/\n/g, '<br>');
  };

  return (
    <div className={`mb-4 flex ${isBot ? 'justify-start' : 'justify-end'}`}>
      <div 
        className={`max-w-[80%] rounded-lg p-3 ${
          isBot 
            ? 'bg-white shadow-sm border border-gray-200' 
            : 'bg-[#000080] text-white'
        }`}
      >
        <div 
          className="mb-1"
          dangerouslySetInnerHTML={{ __html: formatMessageText(message.text) }}
        />
        <div className={`text-xs ${isBot ? 'text-gray-500' : 'text-white/70'} text-right`}>
          {formatTime(message.timestamp)}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;