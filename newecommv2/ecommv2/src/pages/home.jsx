import React from 'react';
import '../css/home.css';
import preBtn from '../images/left-arrow.png';
import nxtBtn from '../images/left-arrow.png';
import plant1 from '../images/plant1.webp';
import plant2 from '../images/plant2.webp';
import plant3 from '../images/plant3.webp';
import plant4 from '../images/plant4.webp';
import plant5 from '../images/plant5.webp';
import plant6 from '../images/plant6.webp';
import plant7 from '../images/plant7.webp';
import plant8 from '../images/plant8.webp';
import plant9 from '../images/plant9.webp';
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
  
        <section>
          <button className="pre-btn"><img src={preBtn} alt="previous arrow" height="40px" width="40px" /></button>
          <button className="nxt-btn"><img src={nxtBtn} alt="next arrow" height="40px" width="40px" /></button>

          <div className="product-container">

            <div className="product-card">
              <div className="product-image">
                <img src={plant1} className="product-thumb" alt="plant1" />
                <button className="card-btn">add to wishlist</button>
              </div>
              <div className="product-info">
                <h2 className="product-brand">brand</h2>
                <p className="product-short-description">a short line about the product</p>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <img src={plant2} className="product-thumb" alt="plant1" />
                <button className="card-btn">add to wishlist</button>
              </div>
              <div className="product-info">
                <h2 className="product-brand">brand</h2>
                <p className="product-short-description">a short line about the product</p>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <img src={plant3} className="product-thumb" alt="plant1" />
                <button className="card-btn">add to wishlist</button>
              </div>
              <div className="product-info">
                <h2 className="product-brand">brand</h2>
                <p className="product-short-description">a short line about the product</p>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <img src={plant4} className="product-thumb" alt="plant1" />
                <button className="card-btn">add to wishlist</button>
              </div>
              <div className="product-info">
                <h2 className="product-brand">brand</h2>
                <p className="product-short-description">a short line about the product</p>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <img src={plant5} className="product-thumb" alt="plant1" />
                <button className="card-btn">add to wishlist</button>
              </div>
              <div className="product-info">
                <h2 className="product-brand">brand</h2>
                <p className="product-short-description">a short line about the product</p>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <img src={plant6} className="product-thumb" alt="plant1" />
                <button className="card-btn">add to wishlist</button>
              </div>
              <div className="product-info">
                <h2 className="product-brand">brand</h2>
                <p className="product-short-description">a short line about the product</p>
              </div>
            </div>


            <div className="product-card">
              <div className="product-image">
                <img src={plant7} className="product-thumb" alt="plant1" />
                <button className="card-btn">add to wishlist</button>
              </div>
              <div className="product-info">
                <h2 className="product-brand">brand</h2>
                <p className="product-short-description">a short line about the product</p>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <img src={plant8} className="product-thumb" alt="plant1" />
                <button className="card-btn">add to wishlist</button>
              </div>
              <div className="product-info">
                <h2 className="product-brand">brand</h2>
                <p className="product-short-description">a short line about the product</p>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <img src={plant9} className="product-thumb" alt="plant1" />
                <button className="card-btn">add to wishlist</button>
              </div>
              <div className="product-info">
                <h2 className="product-brand">brand</h2>
                <p className="product-short-description">a short line about the product</p>
              </div>
            </div>

          </div>
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