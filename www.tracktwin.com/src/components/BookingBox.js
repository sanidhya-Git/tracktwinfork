// src/BookingBox.js
import React, { useState } from 'react';
// import './BookingBox.css'; // Import the CSS file for styling
import { FaPlane, FaTrain, FaBus } from 'react-icons/fa'; // Import icons

const BookingBox = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [date, setDate] = useState('');
  const [travelMode, setTravelMode] = useState('flight');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ from, to, passengers, date, travelMode });
  };

  return (
    <div className="booking-box">
      <h2>Book Your Travel</h2>
      <div className="travel-options">
        <button
          className={`travel-button ${travelMode === 'flight' ? 'active' : ''}`}
          onClick={() => setTravelMode('flight')}
        >
          <FaPlane /> Flight
        </button>
        <button
          className={`travel-button ${travelMode === 'train' ? 'active' : ''}`}
          onClick={() => setTravelMode('train')}
        >
          <FaTrain /> Train
        </button>
        <button
          className={`travel-button ${travelMode === 'bus' ? 'active' : ''}`}
          onClick={() => setTravelMode('bus')}
        >
          <FaBus /> Bus
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="from">From:</label>
          <input
            type="text"
            id="from"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="to">To:</label>
          <input
            type="text"
            id="to"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="passengers">Passengers:</label>
          <input
            type="number"
            id="passengers"
            value={passengers}
            onChange={(e) => setPassengers(e.target.value)}
            min="1"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">Search</button>
      </form>
    </div>
  );
};

export default BookingBox;