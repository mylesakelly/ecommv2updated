import React from 'react';
import '../css/home.css';
import Slider from '../components/slider';
import Home2 from '../pages/home2';





function Home() {
    return (
      <>

       <section className="heroImage">

       <div className="hero-text">
            <h1>Fresh Finds For The Summer</h1>
            <p>Rediscover the joy of plants</p>
            <button>Shop New Arrivals!</button>
          </div>

       </section>
  
        <section className="philosophy-section">
          <h2 className="ph-title">Our Plant <br />Philosophy</h2>
          <p className="ph-text">At our plant shop, we believe in the transformative power of plants <br />to bring happiness and serenity to your life. <br />Step into our botanical oasis, where verdant wonders and vibrant blooms await, <br />ready to ignite your senses and uplift your spirit. <br /><br />Immerse yourself in a world of lush greenery, <br />where each leaf whispers stories of growth and resilience. <br />From delicate ferns cascading gracefully to towering palms exuding majesty, <br />our curated collection of plants invites you to <br />explore the wonders of nature and find your own botanical companions.</p>
        </section>

        <Slider />

        <Home2 /> 

      </>
    );
  }
export default Home;