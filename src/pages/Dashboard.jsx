import React from 'react';

const Dashboard = ({ tripDetails }) => {
  if (!tripDetails) {
    return <h2>No trips available. Please search for a trip.</h2>; // Message if no trip details
  }

  const { from, to } = tripDetails; // Destructure trip details

  return (
    <div className="trip-details">
      <h2>Your Trips</h2>
      <div className="trip-info">
        <h3>Trip Details:</h3>
        <p><strong>From:</strong> {from}</p>
        <p><strong>To:</strong> {to}</p>
      </div>
    </div>
  );
};

export default Dashboard;
