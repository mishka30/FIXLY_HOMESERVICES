import React from 'react';
import Header from './Header';
import HeaderSection from './HeaderSection';
import Footer from './Footer'; 

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <HeaderSection />
      <div className="flex-grow"></div>
      <Footer />
    </div>
  );
};

export default Home;
