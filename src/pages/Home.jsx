import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import DetailCard from '../components/DetailCard';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <DetailCard />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
};

export default Home;
