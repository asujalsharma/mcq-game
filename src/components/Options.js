import React from "react";

function Options({ options, selectedOption, setSelectedOption }) {
  return (
    <div className="answer-section">
      {options.map((option, index) => (
        <button
          key={index}
          className={selectedOption === option ? "selected" : ""}
          onClick={() => setSelectedOption(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
