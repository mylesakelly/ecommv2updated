import React from 'react';
import '../css/home.css';
import customer from '../images/customerpic4.webp';
import icon1 from '../images/philosophy.png';
import icon2 from '../images/dog.png';
import icon3 from '../images/brighten.png';



function Home() {
    return (
      <>

       < section className="heroImage">

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
  
        <section className="slideshow-header">
          <h2>Our Bestsellers</h2>
        </section>

        <section className="values-section">
          <img className="customerpic" src={customer} alt="customer" />
  
          <div className="value-text">
            <img className="icon" src={icon1} width="40px" height="40px" alt="icon1" />
            <p className="value-text-1">Create a peaceful and <br />tranquil home</p><br />
            <img className="icon" src={icon2} width="40px" height="40px" alt="icon2" />
            <p>Animal friendly plants</p><br />
            <img className="icon" src={icon3} width="40px" height="40px" alt="icon3"/>
            <p>Brighten up your Space</p><br />
          </div>
        </section>
      </>
    );
  }
export default Home;