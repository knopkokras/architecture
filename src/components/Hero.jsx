import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__top">
          <h1 className="hero__title">Architecture</h1>
          <div className="hero__content">
            <div className="hero__text">
              <p className="hero__descr">
                We, as a brand, turn your dreams into fantastique interiors and architectural designs. Our projects
                inspire the pursuit of your great aspirations. We create the alchemy of luxury and the enjoyment of our
                clientèle
              </p>
              <button className="hero__btn">All projects</button>
            </div>
            <div className="hero__img">
              <img src="../public/img/hero-architecture.png" width="1060" alt="lokalization" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;