import React from 'react';
import { Link } from 'react-router-dom';
import './main.css';
import Cover_Img from '../../assets/img/background_main.png';
import FoodImg2 from '../../assets/img/food-2.png';
import FoodImg3 from '../../assets/img/newfood.png'

function Main() {
  return (
    <>
      <div>
        <img src={Cover_Img} alt="Background" className="background-image" />
        <div className="info-section">
          <h2>Wedding Catering</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, fugiat.</p>
          <Link to="/wedding" className="info-section-button">Get a quote</Link>
        </div>
        <div className="info-section">
          <h2>Event Catering</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, fugiat.</p>
          <Link to="/event" className="info-section-button">Get a quote</Link>
        </div>
        <div className="info-section">
          <h2>Platters</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, fugiat.</p>
          <Link to="/menu" className="info-section-button">View Menu</Link>
        </div>
      </div>
      <div className="main-text-container">
        <div>
          <h3 className="main-text-title">The proof is in the TASTE</h3>
          <p className="main-text-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, fugiat.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, fugiat.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, fugiat.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, fugiat.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, fugiat.</p>
        </div>
        <div>
          <img src={FoodImg2} className="food-img-2" alt="food" />
        </div>
      </div>
      <div className="main-text-container">
        <div>
          <img src={FoodImg3} className="food-img-2" alt="food" />
        </div>
        <div>
          <h3 className="main-text-title">New's in the MENU</h3>
          <p className="main-text-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, fugiat.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, fugiat.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, fugiat.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, fugiat.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, fugiat.</p>
        </div>
        
      </div>
    </>
  );
}

export default Main;

