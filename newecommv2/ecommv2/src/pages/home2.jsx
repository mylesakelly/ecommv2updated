import React from 'react';
import '../css/home2.css';
import customer from '../images/customerpic4.webp';
import icon1 from '../images/philosophy.png';
import icon2 from '../images/dog.png';
import icon3 from '../images/brighten.png';



function Home2 () {
    return (
      <>

        <section className="values-section">
          <img className="customerpic" src={customer} alt="customer" />
  
          <div className="value-text">
            <img className="icon" src={icon1} alt="icon1" />
            <p className="value-text-1">Create a peaceful and <br />tranquil home</p><br />
            <img className="icon" src={icon2} alt="icon2" />
            <p>Animal friendly plants</p><br />
            <img className="icon" src={icon3} alt="icon3"/>
            <p>Brighten up your Space</p><br />
          </div>
        </section>
      </>
    );
  }
export default Home2;