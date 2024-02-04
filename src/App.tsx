import React, { useState } from "react";

const SquareFeetToAcresConverter = () => {
  // State for square feet input and result
  const [squareFeet, setSquareFeet] = useState("");
  const [acres, setAcres] = useState<null | string>(null);

  // Function to format number with commas and decimal point
  const formatNumberWithCommas = (number: string) => {
    // Remove non-digit characters and add commas for thousands
    const parts = number.split(".");
    const integerPart = parts[0]
      .replace(/\D/g, "")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const decimalPart = parts[1] ? `.${parts[1]}` : "";

    return integerPart === "" ? "" : `${integerPart}${decimalPart}`;
  };

  // Function to handle square feet input change
  const handleSquareFeetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = formatNumberWithCommas(e.target.value);
    setSquareFeet(inputValue);
    convertToAcres(inputValue);
  };

  // Function to convert square feet to acres
  const convertToAcres = (inputValue: string) => {
    const squareFeetValue = parseFloat(inputValue.replace(/,/g, ""));
    if (!isNaN(squareFeetValue)) {
      const acresValue = squareFeetValue / 43560;
      setAcres(acresValue.toFixed(2));
    } else {
      setAcres(null);
    }
  };

  function formatTheNumber(number: any) {
    // Convert the number to a string and split it into integer and decimal parts
    const parts = number.toString().split(".");

    // Add commas to the integer part
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // Join the integer and decimal parts back together
    const formattedNumber = parts.join(".");

    return formattedNumber;
  }

  return (
    <div className="container">
      <label htmlFor="squareFeetInput">Square Feet:</label>
      <input
        type="text"
        id="squareFeetInput"
        value={squareFeet}
        onChange={handleSquareFeetChange}
      />
      {/* Remove the button as conversion happens on each input change */}

      <div>
        <strong>Result:</strong>{" "}
        <p className="result">
          {acres ? formatTheNumber(acres) : "0.00"} acres
        </p>
      </div>
    </div>
  );
};

export default SquareFeetToAcresConverter;
