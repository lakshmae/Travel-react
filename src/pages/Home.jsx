import React, { useState } from 'react';
import SearchForm from '../components/SearchForm';
import BudgetCalculator from '../components/BudgetCalculator';
import Map from '../components/Map';
import HotelLinks from '../components/HotelLinks';
import Dashboard from './Dashboard'; // Import Dashboard

const Home = () => {
  const [plan, setPlan] = useState(null);
  const [tripDetails, setTripDetails] = useState(null); // State for trip details

  const handleSearch = (data) => {
    setPlan({ ...data});
    setTripDetails({ from: data.from, to: data.to }); // Set trip details
  };

  return (
    <div className="center-container">
      <div className="box">
        <h1>Welcome to Travel Planner</h1>
        <SearchForm onSearch={handleSearch} />
        {plan && (
          <>
            <BudgetCalculator budget={plan.budget} />
            <Map from={plan.from} to={plan.to} />
            <HotelLinks destination={plan.to} />
          </>
        )}
        <Dashboard tripDetails={tripDetails} /> {/* Pass tripDetails to Dashboard */}
      </div>
    </div>
  );
};

export default Home;
