import React, { useState } from 'react';
import './event.css'
import EventImg from '../../assets/img/event-img.png'

const Event = () => {
  const [guestCount, setGuestCount] = useState('');
  const [mealOption, setMealOption] = useState('buffet');
  const [serveOption, setServeOption] = useState(false);
  const [quote, setQuote] = useState(null);

  const handleGuestCountChange = event => {
    setGuestCount(event.target.value);
  };

  const handleMealOptionChange = event => {
    const selectedMealOption = event.target.value;
    setMealOption(selectedMealOption);

    // Disable serve option for buffet meal option
    if (selectedMealOption === 'buffet') {
      setServeOption(false);
    }
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
        <img src={EventImg} className='event-img' alt=''/>
      <h2 className='event-title'>Calculate your Event Catering Quote </h2>
      <form onSubmit={handleCalculateQuote}>
        <label className='event-text'>
          Number of Guests:
          <input
          className='event-input'
            type="number"
            value={guestCount}
            onChange={handleGuestCountChange}
          />
        </label>
        <br />
        <label className='event-text'>
          Meal Option:
          <select className='event-input' value={mealOption} onChange={handleMealOptionChange}>
            <option value="plated" >Plated</option>
            <option value="buffet">Buffet</option>
          </select>
        </label>
        <br />
        {mealOption === 'buffet' ? (
          <label>
            Serve Option (additional 5€ per guest):
            <input
            className='event-input'
              type="checkbox"
              checked={false}
              disabled
            />
          </label>
        ) : (
          <label className='event-text'>
            <input
              type="checkbox"
              checked={serveOption}
              onChange={handleServeOptionChange}
            />
            Serve Option (additional 5€ per guest)
          </label>
        )}
        <br />
        <button type="submit" className='event-button'>Calculate Quote</button>
      </form>
      {quote !== null && (
        <p className='event-qoute-text'>Your catering quote: €{quote}</p>
      )}
    </>
  );
};

export default Event;
