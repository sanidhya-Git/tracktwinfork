import React from 'react';
import packagee1 from '../assets/images/packege-1.jpg';
import packagee2 from '../assets/images/packege-2.jpg';
import packagee3 from '../assets/images/packege-3.jpg';

const Packages = () => {
  return (
    <section className="package" id="package">
      <div className="container">
        <p className="section-subtitle">Popular Packeges</p>
        <h2 className="h2 section-title">Checkout Our Packeges</h2>
        <p className="section-text">
        "Ready to make your dream getaway a reality? Check out our packages – adventure is just a click away!"
        </p>
        <ul class="package-list">

<li>
  <div class="package-card">

    <figure class="card-banner">
      <img src={packagee1} alt="Experience The Great Holiday On Beach" loading="lazy"/>
    </figure>

    <div class="card-content">

      <h3 class="h3 card-title">Experience The Great Holiday On Beach</h3>

      <p class="card-text">
        Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo maiores, est aliquet porttitor! Eaque,
        cras, aspernatur.
      </p>

      <ul class="card-meta-list">

        <li class="card-meta-item">
          <div class="meta-box">
            <ion-icon name="time"></ion-icon>

            <p class="text">7D/6N</p>
          </div>
        </li>

        <li class="card-meta-item">
          <div class="meta-box">
            <ion-icon name="people"></ion-icon>

            <p class="text">pax: 10</p>
          </div>
        </li>

        <li class="card-meta-item">
          <div class="meta-box">
            <ion-icon name="location"></ion-icon>

            <p class="text">Malaysia</p>
          </div>
        </li>

      </ul>

    </div>

    <div class="card-price">

      <div class="wrapper">

        <p class="reviews">(25 reviews)</p>

        <div class="card-rating">
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
        </div>

      </div>

      <p class="price">
        ₹750
        <span>/ per person</span>
      </p>

      <button class="btn btn-secondary">Book Now</button>

    </div>

  </div>
</li>

<li>
  <div class="package-card">

    <figure class="card-banner">
      <img src={packagee2} alt="Summer Holiday To The Oxolotan River" loading="lazy"/>
    </figure>

    <div class="card-content">

      <h3 class="h3 card-title">Summer Holiday To The Oxolotan River</h3>

      <p class="card-text">
        Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo maiores, est aliquet porttitor! Eaque,
        cras, aspernatur.
      </p>

      <ul class="card-meta-list">

        <li class="card-meta-item">
          <div class="meta-box">
            <ion-icon name="time"></ion-icon>

            <p class="text">7D/6N</p>
          </div>
        </li>

        <li class="card-meta-item">
          <div class="meta-box">
            <ion-icon name="people"></ion-icon>

            <p class="text">pax: 10</p>
          </div>
        </li>

        <li class="card-meta-item">
          <div class="meta-box">
            <ion-icon name="location"></ion-icon>

            <p class="text">Malaysia</p>
          </div>
        </li>

      </ul>

    </div>

    <div class="card-price">

      <div class="wrapper">

        <p class="reviews">(20 reviews)</p>

        <div class="card-rating">
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
        </div>

      </div>

      <p class="price">
       ₹520
        <span>/ per person</span>
      </p>

      <button class="btn btn-secondary">Book Now</button>

    </div>

  </div>
</li>

<li>
  <div class="package-card">

    <figure class="card-banner">
      <img src={packagee3} alt="Santorini Island's Weekend Vacation" loading="lazy"/>
    </figure>

    <div class="card-content">

      <h3 class="h3 card-title">Santorini Island's Weekend Vacation</h3>

      <p class="card-text">
        Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo maiores, est aliquet porttitor! Eaque,
        cras, aspernatur.
      </p>

      <ul class="card-meta-list">

        <li class="card-meta-item">
          <div class="meta-box">
            <ion-icon name="time"></ion-icon>

            <p class="text">7D/6N</p>
          </div>
        </li>

        <li class="card-meta-item">
          <div class="meta-box">
            <ion-icon name="people"></ion-icon>

            <p class="text">pax: 10</p>
          </div>
        </li>

        <li class="card-meta-item">
          <div class="meta-box">
            <ion-icon name="location"></ion-icon>

            <p class="text">Malaysia</p>
          </div>
        </li>

      </ul>

    </div>

    <div class="card-price">

      <div class="wrapper">

        <p class="reviews">(40 reviews)</p>

        <div class="card-rating">
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
        </div>

      </div>

      <p class="price">
        ₹660
        <span>/ per person</span>
      </p>

      <button class="btn btn-secondary">Book Now</button>

    </div>

  </div>
</li>

</ul>
        <button className="btn btn-primary">View All Packages</button>
      </div>
    </section>
  );
};

export default Packages;