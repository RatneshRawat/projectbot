import { useState, useEffect } from 'react';

interface SpeechRecognitionHook {
  isListening: boolean;
  transcript: string;
  startListening: () => void;
  stopListening: () => void;
  hasRecognitionSupport: boolean;
  resetTranscript: () => void;
}

export const useSpeechRecognition = (): SpeechRecognitionHook => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [hasRecognitionSupport, setHasRecognitionSupport] = useState(false);
  
  // Check for browser support
  useEffect(() => {
    setHasRecognitionSupport(
      'SpeechRecognition' in window || 
      'webkitSpeechRecognition' in window
    );
  }, []);
  
  // Set up recognition object
  const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
  let recognition: any = null;
  
  if (hasRecognitionSupport) {
    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = 'en-US';
  }
  
  const startListening = () => {
    if (!hasRecognitionSupport) return;
    
    setTranscript('');
    setIsListening(true);
    
    recognition.onresult = (event: any) => {
      const currentTranscript = Array.from(event.results)
        .map((result: any) => result[0].transcript)
        .join('');
      
      setTranscript(currentTranscript);
    };
    
    recognition.onerror = (event: any) => {
      console.error('Speech recognition error:', event.error);
      stopListening();
    };
    
    recognition.onend = () => {
      setIsListening(false);
    };
    
    recognition.start();
  };
  
  const stopListening = () => {
    if (!hasRecognitionSupport || !isListening) return;
    
    recognition.stop();
    setIsListening(false);
  };
  
  const resetTranscript = () => {
    setTranscript('');
  };
  
  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (recognition && isListening) {
        recognition.stop();
      }
    };
  }, [isListening]);
  
  return {
    isListening,
    transcript,
    startListening,
    stopListening,
    hasRecognitionSupport,
    resetTranscript
  };
};