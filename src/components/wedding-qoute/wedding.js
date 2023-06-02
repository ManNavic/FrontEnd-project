import React, { useState } from 'react';
import WeddingImg from '/Users/mantas/Desktop/Boolean/React/project/src/assets/img/wedding-table.jpeg'
import './wedding.css'

const Wedding = () => {
  const [guestCount, setGuestCount] = useState('');
  const [mealOption, setMealOption] = useState('buffet');
  const [serveOption, setServeOption] = useState(false);
  const [quote, setQuote] = useState(null);

  const handleGuestCountChange = event => {
    setGuestCount(event.target.value);
  };

  const handleMealOptionChange = event => {
    setMealOption(event.target.value);
  };

  const handleServeOptionChange = event => {
    setServeOption(event.target.checked);
  };

  const handleCalculateQuote = event => {
    event.preventDefault();

    const basePricePerGuest = serveOption ? 30 : 20; 
    const buffetPricePerGuest = 5; 
    const platedPricePerGuest = 8; 
    const servePricePerGuest = 10; 

    let totalPrice = basePricePerGuest * guestCount;

    if (mealOption === 'buffet') {
      totalPrice += buffetPricePerGuest * guestCount;
    } else if (mealOption === 'plated') {
      totalPrice += platedPricePerGuest * guestCount;
    }

    if (serveOption) {
      totalPrice += servePricePerGuest * guestCount;
    }

    setQuote(totalPrice);
  };

  return (
    <>
    <img src={WeddingImg} className='wedding-img' alt=''/>
      <h2 className='wedding-title'>Calculate your Wedding Catering Quote </h2>
      <form onSubmit={handleCalculateQuote}>
        <label className='wedding-text'>
          Number of Guests:
          <input
          className='wedding-input'
            type="number"
            value={guestCount}
            onChange={handleGuestCountChange}
          />
        </label>
        <br />
        <label className='wedding-text'>
          Meal Option:
          <select value={mealOption} onChange={handleMealOptionChange} className='wedding-input'>
            <option value="plated">Plated</option>
          </select>
        </label>
        <br />
        <label className='wedding-text'>
          <input
            type="checkbox"
            checked={serveOption}
            onChange={handleServeOptionChange}
          />
          Serve Option (additional 5€ per guest)
        </label>
        <br />
        <button type="submit" className='wedding-button'>Calculate Quote</button>
      </form>
      {quote !== null && (
        <p className='wedding-qoute-text'>Your catering quote: €{quote}</p>
      )}
    </>
  );
};

export default Wedding;
