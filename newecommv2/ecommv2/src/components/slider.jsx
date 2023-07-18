import React, { useRef } from 'react';
import '../css/slider.css';
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

const Slider = () => {
  // useRef hook to create a reference to the slider element in the DOM.
    const sliderRef = useRef(null);
  
    const scrollLeft = () => {
      // scrolls the slider to the left by subtracting the width of the slider element from its current scroll position.
      sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
    };
  
    const scrollRight = () => {
      // scrolls the slider to the right by adding the width of the slider element to its current scroll position.
      sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
    };
  
   
  return (
  

    <section>

        <section className="slideshow-header">
          <h2>Our Bestsellers</h2>
        </section>

      <button className="pre-btn" onClick={scrollLeft}>
        <img src={preBtn} alt="previous arrow" height="40px" width="40px" />
      </button>
      <button className="nxt-btn" onClick={scrollRight}>
        <img src={nxtBtn} alt="next arrow" height="40px" width="40px" />
      </button>

      <div className="product-container" ref={sliderRef}>
        {/* Render each product card */}
        <div className="product-card">
          {/* Render product image and other information */}
          <div className="product-image">
            <img src={plant1} className="product-thumb" alt="plant1" />
            <button className="card-btn">add to wishlist</button>
          </div>
          <div className="product-info">
            <h2 className="product-brand">brand</h2>
            <p className="product-short-description">a short line about the product</p>
          </div>
        </div>

        {/* Render other product cards */}
        <div className="product-card">
          {/* Render product image and other information */}
          <div className="product-image">
            <img src={plant2} className="product-thumb" alt="plant2" />
            <button className="card-btn">add to wishlist</button>
          </div>
          <div className="product-info">
            <h2 className="product-brand">brand</h2>
            <p className="product-short-description">a short line about the product</p>
          </div>
        </div>

        <div className="product-card">
          <div className="product-image">
            <img src={plant3} className="product-thumb" alt="plant3" />
            <button className="card-btn">add to wishlist</button>
          </div>
          <div className="product-info">
            <h2 className="product-brand">brand</h2>
            <p className="product-short-description">a short line about the product</p>
          </div>
        </div>

        <div className="product-card">
          <div className="product-image">
            <img src={plant4} className="product-thumb" alt="plant3" />
            <button className="card-btn">add to wishlist</button>
          </div>
          <div className="product-info">
            <h2 className="product-brand">brand</h2>
            <p className="product-short-description">a short line about the product</p>
          </div>
        </div>

        <div className="product-card">
          <div className="product-image">
            <img src={plant5} className="product-thumb" alt="plant3" />
            <button className="card-btn">add to wishlist</button>
          </div>
          <div className="product-info">
            <h2 className="product-brand">brand</h2>
            <p className="product-short-description">a short line about the product</p>
          </div>
        </div>

        <div className="product-card">
          <div className="product-image">
            <img src={plant6} className="product-thumb" alt="plant3" />
            <button className="card-btn">add to wishlist</button>
          </div>
          <div className="product-info">
            <h2 className="product-brand">brand</h2>
            <p className="product-short-description">a short line about the product</p>
          </div>
        </div>

        <div className="product-card">
          <div className="product-image">
            <img src={plant7} className="product-thumb" alt="plant3" />
            <button className="card-btn">add to wishlist</button>
          </div>
          <div className="product-info">
            <h2 className="product-brand">brand</h2>
            <p className="product-short-description">a short line about the product</p>
          </div>
        </div>

        <div className="product-card">
          <div className="product-image">
            <img src={plant8} className="product-thumb" alt="plant3" />
            <button className="card-btn">add to wishlist</button>
          </div>
          <div className="product-info">
            <h2 className="product-brand">brand</h2>
            <p className="product-short-description">a short line about the product</p>
          </div>
        </div>

        <div className="product-card">
          <div className="product-image">
            <img src={plant9} className="product-thumb" alt="plant3" />
            <button className="card-btn">add to wishlist</button>
          </div>
          <div className="product-info">
            <h2 className="product-brand">brand</h2>
            <p className="product-short-description">a short line about the product</p>
          </div>
        </div>

        {/* Add other product cards here */}
      </div>
    </section>
  );
};







  export default Slider;
  