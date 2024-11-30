import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="home ">
      <div className="container">
        <h2 className="h1 hero-title">Journey to explore world</h2>
        <p className="hero-text">
        "Pack your bags, leave your worries behind, and let us handle the 'where' - you just focus on the 'wow'!"
        </p>
        <div className="btn-group">
          <button className="btn btn-primary">Learn more</button>
          <button className="btn btn-secondary">Book now</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;