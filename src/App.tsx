import React, { useState } from "react";

const SquareFeetToAcresConverter = () => {
  // State for square feet input and result
  const [squareFeet, setSquareFeet] = useState("");
  const [acres, setAcres] = useState<null | string>(null);

  // Function to handle square feet input change
  const handleSquareFeetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setSquareFeet(inputValue);
    convertToAcres(inputValue);
  };

  // Function to convert square feet to acres
  const convertToAcres = (inputValue: string) => {
    const squareFeetValue = parseFloat(inputValue);
    if (!isNaN(squareFeetValue)) {
      const acresValue = squareFeetValue / 43560;
      setAcres(acresValue.toFixed(2));
    } else {
      setAcres(null);
    }
  };

  return (
    <div className="container">
      <label htmlFor="squareFeetInput">Square Feet:</label>
      <input
        type="number"
        id="squareFeetInput"
        value={squareFeet}
        onChange={handleSquareFeetChange}
      />
      {/* Remove the button as conversion happens on each input change */}

      {acres !== null && (
        <div>
          <strong>Result:</strong> <p className="result">{acres} acres</p>
        </div>
      )}
    </div>
  );
};

export default SquareFeetToAcresConverter;
