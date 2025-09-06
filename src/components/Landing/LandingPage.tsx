import React from 'react';
import Hero from './Hero';
import Features from './Features';
import Pricing from './Pricing';
import Create from './Create';
import Footer from './Footer';
import Contact from './Contact';

const LandingPage = () => {
  return (
    <div className='bg-blue-50 flex flex-col gap-10'>
      <Hero />
      <Features />
      <Pricing />
      <Create />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;
