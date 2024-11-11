import React from 'react';
import image1 from '../assets/images/tt.png';
import image2 from '../assets/images/popular-2.jpg';
import image3 from '../assets/images/taj mahar.avif';
const PopularDestinations = () => {
  return (
    <section className="popular" id="destination">
      <div className="container">
        <p className="section-subtitle">Uncover place</p>
        <h2 className="h2 section-title">Popular destination</h2>
        <p className="section-text">
        "Come for the sights, stay for the selfies - this place is basically a vacation filter in real life!"
        </p>
        <ul class="popular-list">
            <li>
              <div class="popular-card">
                <figure class="card-img">
                  <img src={image1} alt="San miguel, italy" loading="lazy"/>
                </figure>
                <div class="card-content">
                  <div class="card-rating"><star/>
                  </div>
                  <p class="card-subtitle">
                    <a href="\">Italy</a>
                  </p>

                  <h3 class="h3 card-title">
                    <a href="\">San miguel</a>
                  </h3>

                  <p class="card-text">
                    Fusce hic augue velit wisi ips quibusdam pariatur, iusto.
                  </p>

                </div>

              </div>
            </li>

            <li>
              <div class="popular-card">

                <figure class="card-img">
                  <img src={image2} alt="Burj khalifa, dubai" loading="lazy"/>
                </figure>

                <div class="card-content">

                  <div class="card-rating"><star/>
                  </div>

                  <p class="card-subtitle">
                    <a href="\">Dubai</a>
                  </p>

                  <h3 class="h3 card-title">
                    <a href="\">Burj khalifa</a>
                  </h3>

                  <p class="card-text">
                    Fusce hic augue velit wisi ips quibusdam pariatur, iusto.
                  </p>

                </div>

              </div>
            </li>

            <li>
              <div class="popular-card">

                <figure class="card-img">
                  <img src={image3} alt="Kyoto temple, japan" loading="lazy"/>
                </figure>

                <div class="card-content">

                  <div class="card-rating"><star/>
                  </div>

                  <p class="card-subtitle">
                    <a href="\">Japan</a>
                  </p>

                  <h3 class="h3 card-title">
                    <a href="\">Kyoto temple</a>
                  </h3>

                  <p class="card-text">
                    Fusce hic augue velit wisi ips quibusdam pariatur, iusto.
                  </p>

                </div>

              </div>
            </li>

          </ul>
        <button className="btn btn-primary">More destintion</button>
      </div>
    </section>
  );
};

export default PopularDestinations;