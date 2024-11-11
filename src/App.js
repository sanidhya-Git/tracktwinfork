import React from 'react';
import Header from './components/header';
import Hero from './components/hero';
import TourSearch from './components/toursearch';
import PopularDestinations from './components/populardestination';
import Packages from './components/package';
import Gallery from './components/gallery';
import CTA from './components/cta';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <TourSearch />
      <PopularDestinations />
      <Packages />
      <Gallery />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;