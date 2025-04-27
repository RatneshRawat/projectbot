import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import DestinationsPage from './pages/DestinationsPage';
import ContactPage from './pages/ContactPage';
import ChatbotButton from './components/Chatbot/ChatbotButton';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <ChatbotButton />
      </Layout>
    </Router>
  );
}

export default App;