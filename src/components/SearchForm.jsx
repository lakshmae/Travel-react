import React, { useState } from 'react';
import "../App.css";

const SearchForm = ({ onSearch }) => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ from, to });
  };

  return (
    <div className="search-form-container">
      <form className="search-form" onSubmit={handleSubmit}>
        <h2 className="form-title"></h2>
        
        <label htmlFor="from" className="form-label">From:</label>
        <input 
          id="from"
          type="text" 
          value={from} 
          onChange={(e) => setFrom(e.target.value)} 
          placeholder="Enter departure location" 
          required 
          className="search-input"
        />
        <br />

        <label htmlFor="to" className="form-label">To:</label>
        <input 
          id="to"
          type="text" 
          value={to} 
          onChange={(e) => setTo(e.target.value)} 
          placeholder="Enter destination location" 
          required 
          className="search-input"
        />
        <br />

        <button type="submit" className="search-button">Submit</button>
      </form>
    </div>
  );
};

export default SearchForm;
