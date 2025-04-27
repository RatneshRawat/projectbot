import React from 'react';
import Hero from '../components/Home/Hero';
import FeaturedDestinations from '../components/Home/FeaturedDestinations';
import WhyChooseUs from '../components/Home/WhyChooseUs';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <FeaturedDestinations />
      <WhyChooseUs />
    </div>
  );
};

export default HomePage;