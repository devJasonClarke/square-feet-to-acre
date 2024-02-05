import React, { useState, ChangeEvent } from "react";

const SquareFeetToAcresConverter: React.FC = () => {
  // State for square feet input and result
  const [squareFeet, setSquareFeet] = useState<string>("");
  const [acres, setAcres] = useState<string | null>(null);
  const [moneyAmount, setMoneyAmount] = useState<string>("");

  // Function to format number with commas and decimal point
  const formatNumberWithCommas = (number: string): string => {
    // Remove non-digit characters and add commas for thousands
    const parts = number.split(".");
    const integerPart = parts[0]
      .replace(/\D/g, "")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const decimalPart = parts[1] ? `.${parts[1]}` : "";

    return integerPart === "" ? "" : `${integerPart}${decimalPart}`;
  };

  // Function to handle square feet input change
  const handleSquareFeetChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const inputValue = formatNumberWithCommas(e.target.value);
    setSquareFeet(inputValue);
    convertToAcres(inputValue);
  };

  // Function to convert square feet to acres
  const convertToAcres = (inputValue: string): void => {
    const squareFeetValue = parseFloat(inputValue.replace(/,/g, ""));
    if (!isNaN(squareFeetValue)) {
      const acresValue = squareFeetValue / 43560;
      setAcres(acresValue.toFixed(2));
    } else {
      setAcres(null);
    }
  };

  // Function to handle the input change
  const handleMoneyAmountChange = (e: ChangeEvent<HTMLInputElement>): void => {
    // Update the moneyAmount state with the input value
    const inputValue = formatNumberWithCommas(e.target.value);
    setMoneyAmount(inputValue);
  };

  // Function to calculate 20% of the money amount
  const calculatePercentage = (): string => {
    // Calculate 20% of the moneyAmount
    const amount = Number(moneyAmount.replace(/,/g, "")) * 0.2;
    return formatNumberWithCommas(amount.toFixed(2));
  };

  return (
    <div className="mainContainer">
      <div className="container">
        <label htmlFor="squareFeetInput">Square Feet:</label>
        <input
          type="text"
          id="squareFeetInput"
          value={squareFeet}
          onChange={handleSquareFeetChange}
        />

        <div>
          <strong>Total Acres:</strong>{" "}
          <p className="result">
            {acres ? formatNumberWithCommas(acres) : "0.00"} acres
          </p>
        </div>
      </div>
      <div className="container">
        <label htmlFor="moneyAmountInput">Money Amount:</label>
        <input
          type="text"
          id="moneyAmountInput"
          value={Number(moneyAmount.replace(/,/g, "")) > 0 ? moneyAmount : "0"}
          onChange={handleMoneyAmountChange}
        />

        <div>
          <strong>20% of Amount:</strong>{" "}
          <p className="result">
            $
            {Number(moneyAmount.replace(/,/g, "")) > 0
              ? calculatePercentage()
              : "0"}{" "}
            {/* Display the result with 2 decimal places */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SquareFeetToAcresConverter;
