import React from "react";

function Question({ question, current, total }) {
  return (
    <div className="question-section">
      <div className="question-count">
        <span>Question {current}</span>/{total}
      </div>
      <div className="question-text">{question}</div>
    </div>
  );
}

export default Question;
