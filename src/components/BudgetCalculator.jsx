import React, { useState } from 'react';
import "../App.css";

const BudgetCalculator = () => {
  const [budget, setBudget] = useState(0); // State variable for budget

  const handleInputChange = (event) => {
    const value = event.target.value;
    setBudget(value); // Update budget state with input value
  };

  return (
    <div className="budget-calculator-box"> {/* Box for the budget calculator */}
      <h2>Estimated Budget</h2>
      <input
        type="number"
        placeholder="Enter your total budget"
        value={budget}
        onChange={handleInputChange} // Update budget on change
      />
      <p>Total: ${budget}</p>
    </div>
  );
};

export default BudgetCalculator;
