import React, { useState, useRef, useEffect } from 'react';
import { Send, Mic, MicOff, Camera } from 'lucide-react';
import ChatMessage from './ChatMessage';
import ImageSearch from './ImageSearch';
import { fetchCohereResponse } from '../../services/cohereService';
import { useSpeechRecognition } from '../../hooks/useSpeechRecognition';
import { Message } from '../../types/chatbot';

type ChatbotPanelProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ChatbotPanel: React.FC<ChatbotPanelProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! 👋 I'm your India Travel Assistant. Ask me about places, culture, food, or travel tips! You can also search by image or use voice commands.",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showImageSearch, setShowImageSearch] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const { 
    isListening, 
    transcript, 
    startListening, 
    stopListening, 
    hasRecognitionSupport 
  } = useSpeechRecognition();
  
  useEffect(() => {
    if (transcript) {
      setInputText(transcript);
    }
  }, [transcript]);
  
  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);
    
    try {
      const response = await fetchCohereResponse(inputText);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error fetching response:', error);
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm sorry, I'm having trouble connecting right now. Please try again later.",
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  const handleVoiceInput = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  const handleImageSearch = async (searchQuery: string) => {
    setInputText(searchQuery);
    await handleSendMessage();
  };

  return (
    <>
      <div 
        className={`fixed bottom-20 right-6 w-96 max-w-[calc(100vw-2rem)] h-[600px] max-h-[calc(100vh-10rem)] bg-white rounded-lg shadow-xl overflow-hidden z-40 flex flex-col transition-all duration-300 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-[#000080] text-white p-4 flex items-center">
          <div className="flex-1">
            <h3 className="font-bold text-lg">IndiaTour Guide Bot</h3>
            <p className="text-xs opacity-80">Powered by AI</p>
          </div>
        </div>
        
        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          {isLoading && (
            <div className="flex items-center space-x-2 text-gray-500 my-2">
              <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse"></div>
              <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        {/* Input Area */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center space-x-2">
            <textarea
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF9933] resize-none"
              placeholder="Ask about Indian travel..."
              rows={2}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            
            <div className="flex flex-col space-y-2">
              <button
                className="p-2 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300"
                onClick={() => setShowImageSearch(true)}
                aria-label="Search by image"
              >
                <Camera size={20} />
              </button>

              {hasRecognitionSupport && (
                <button
                  className={`p-2 rounded-full ${
                    isListening 
                      ? 'bg-red-500 text-white' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                  onClick={handleVoiceInput}
                  aria-label={isListening ? 'Stop recording' : 'Start voice input'}
                >
                  {isListening ? <MicOff size={20} /> : <Mic size={20} />}
                </button>
              )}
              
              <button
                className="p-2 rounded-full bg-[#FF9933] text-white hover:bg-[#FF9933]/90 disabled:opacity-50"
                onClick={handleSendMessage}
                disabled={!inputText.trim() || isLoading}
                aria-label="Send message"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
          
          {isListening && (
            <p className="text-xs text-red-500 mt-1 animate-pulse">
              Listening... Speak now
            </p>
          )}
          
          <p className="text-xs text-gray-500 mt-2">
            Ask about places, food, culture, or travel tips in India! Try voice commands or image search.
          </p>
        </div>
      </div>

      {showImageSearch && (
        <ImageSearch
          onImageSearch={handleImageSearch}
          onClose={() => setShowImageSearch(false)}
        />
      )}
    </>
  );
};

export default ChatbotPanel;