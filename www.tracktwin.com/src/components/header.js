import React from 'react';
import { IonIcon } from '@ionic/react'; // Update the import statement
import logo from '../assets/images/upper logo.png'; // Adjust the path as necessary
import { InstagramIcon, LinkedInIcon, PhoneIcon, TwitterIcon, YoutubeIcon  } from '../assets/icons';

const Header = () => {
  return (
    <header className="header" data-header>
      <div className="overlay" data-overlay></div>
      <div className="header-top">
        <div className="container">
          <a href="+91 9785701319" className="helpline-box">
            <div className="icon-box">
              {/* <IonIcon name="call-outline" /> */}
              <PhoneIcon className= "w-5 h-5"/>
            </div>
            <div className="wrapper">
              <p className="helpline-title">For Further Inquires :</p>
              <p className="helpline-number">+91 9785701319</p>
            </div>
          </a>
          <a href="#" className="logo">
            <img src={logo} alt="Tourly logo" style={{ width: '197px' }} />
          </a>
          <div className="header-btn-group">
            <button className="search-btn" aria-label="Search">
              <IonIcon name="search" />
            </button>
            <button className="nav-open-btn" aria-label="Open Menu" data-nav-open-btn>
              <IonIcon name="menu-outline" />
            </button>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        
        {<div class="container">

<ul class="social-list">

  <li>
    <a href="https://www.instagram.com/traktwin?igsh=cG04OG85OHN5Nnk5" class="social-link">
      <InstagramIcon/>
    </a>
  </li>

  <li>
    <a href="https://x.com/TrakTwin1" class="social-link">
      <TwitterIcon/>
    </a>
  </li>

  <li>
    <a href="https://www.linkedin.com/company/trak-twin/?viewAsMember=true" class="social-link">
      <LinkedInIcon/>
    </a>
  </li>
  <li>
    <a href="#" class="social-link">
      <YoutubeIcon/>
    </a>
  </li>

</ul>

<nav class="navbar" data-navbar>

  <div class="navbar-top">

    <a href="#" class="logo">
      <img src="assets/images/logo.png" alt="Tourly logo"/>
    </a>

    <button class="nav-close-btn" aria-label="Close Menu" data-nav-close-btn>
      <ion-icon name="close-outline"></ion-icon>
    </button>

  </div>

  <ul class="navbar-list">


    <li>
      <a href="#" class="navbar-link" data-nav-link>about us</a>
    </li>

    <li>
      <a href="#destination" class="navbar-link" data-nav-link>destination</a>
    </li>

    <li>
      <a href="#package" class="navbar-link" data-nav-link>packages</a>
    </li>

    <li>
      <a href="#gallery" class="navbar-link" data-nav-link>gallery</a>
    </li>    

  </ul>

</nav>

<button class="btn btn-primary">Book Now</button>

</div>}
      </div>
    </header>
  );
};

export default Header;