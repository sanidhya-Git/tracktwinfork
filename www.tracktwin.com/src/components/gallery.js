import React from 'react';
import gallery1 from '../assets/images/gallary1.jpg';
import gallery2 from '../assets/images/gallary2.jpg';
import gallery3 from '../assets/images/gallery-3.jpg';
import gallery5 from '../assets/images/gallary5.png';
import gallery4 from '../assets/images/gallary4.webp';
const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <p className="section-subtitle">Photo Gallery</p>
        <h2 className="h2 section-title">Photo's From Travellers</h2>
        <p className="section-text">
        "Captured memories, one snapshot at a time - see the world through our travelers' lens!"
        </p>
        <ul class="gallery-list">

            <li class="gallery-item">
              <figure class="gallery-image">
                <img src={gallery1} alt="Gallery image"/>
              </figure>
            </li>

            <li class="gallery-item">
              <figure class="gallery-image">
                <img src={gallery2} alt="Gallery image"/>
              </figure>
            </li>

            <li class="gallery-item">
              <figure class="gallery-image">
                <img src={gallery3} alt="Gallery image"/>
              </figure>
            </li>

            <li class="gallery-item">
              <figure class="gallery-image">
                <img src={gallery4} alt="Gallery image"/>
              </figure>
            </li>

            <li class="gallery-item">
              <figure class="gallery-image">
                <img src={gallery5} alt="Gallery image"/>
              </figure>
            </li>

          </ul>
      </div>
    </section>
  );
};

export default Gallery;