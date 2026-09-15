import { useState } from "react";

const DonationInput = () => {
  const [amount, setAmount] = useState(100);
  const [active, setActive] = useState("100");

  const donationOptions = ["50", "100", "200"];

  const handleClick = (value: string) => {
    setAmount(Number(value));
    setActive(value);
  };

  const handleCustom = () => {
    const customValue = window.prompt("Enter your custom donation amount:");
    if (customValue && !isNaN(Number(customValue)) && Number(customValue) > 0) {
      setAmount(Number(customValue));
      setActive("custom");
    }
  };

  return (
    <div>
      <div className="donation-display">
        <span className="currency">$</span>
        <span id="donation-amount">{amount}</span>
      </div>

      <div className="donation-options">
        {donationOptions.map((val) => (
          <button
            key={val}
            className={`donation-btn ${active === val ? "active" : ""}`}
            onClick={() => handleClick(val)}
          >
            {val}
          </button>
        ))}

        {/* Custom button with JS input popup */}
        <button
          id="custom-btn"
          className={active === "custom" ? "active" : ""}
          onClick={handleCustom}
        >
          Custom
        </button>
      </div>
    </div>
  );
};

export default DonationInput;
