import React from 'react';
import "../App.css";
const Map = ({ from, to }) => {
  return (
    <div>
      <h3>Road Map You choose {from} to {to}</h3>
      {/* Integrate a map API like Google Maps here */}
    </div>
  );
};

export default Map;