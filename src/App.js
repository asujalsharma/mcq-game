import React, { useState } from "react";
import './App.css';
import Question from "./components/Question";
import Options from "./components/Options";
import Score from "./components/Score";


const quizQuestions = [
  {
    "question": "What is the primary purpose of ReactJS?",
    "options": [
      "To handle database operations",
      "To develop mobile applications",
      "To build user interfaces",
      "To manage cloud storage"
    ],
    "answer": "To build user interfaces"
  },
  {
    "question": "Which method is used to update the state in a React class component?",
    "options": [
      "this.changeState()",
      "this.setState()",
      "this.updateState()",
      "this.stateUpdate()"
    ],
    "answer": "this.setState()"
  },
  {
    "question": "What is JSX in React?",
    "options": [
      "A programming language",
      "A function to create components",
      "A syntax extension that looks similar to HTML",
      "A CSS preprocessor"
    ],
    "answer": "A syntax extension that looks similar to HTML"
  },
  {
    "question": "Which hook is used to add state to functional components in React?",
    "options": [
      "useState()",
      "useEffect()",
      "useContext()",
      "useReducer()"
    ],
    "answer": "useState()"
  },
  {
    "question": "Which of the following is not a lifecycle method in React class components?",
    "options": [
      "componentDidMount",
      "componentWillUpdate",
      "componentWillUnmount",
      "componentRendering"
    ],
    "answer": "componentRendering"
  },
  {
    "question": "What is the virtual DOM in React?",
    "options": [
      "A lightweight copy of the actual DOM",
      "The real DOM",
      "A browser API for manipulating HTML",
      "A data structure used by Node.js"
    ],
    "answer": "A lightweight copy of the actual DOM"
  },
  {
    "question": "Which of the following is a JavaScript package manager?",
    "options": [
      "Node.js",
      "npm",
      "Express.js",
      "Webpack"
    ],
    "answer": "npm"
  },
  {
    "question": "How do you pass data from a parent to a child component in React?",
    "options": [
      "Using state",
      "Using hooks",
      "Using props",
      "Using context"
    ],
    "answer": "Using props"
  },
  {
    "question": "Which HTTP method is commonly used to retrieve data from an API?",
    "options": [
      "POST",
      "GET",
      "PUT",
      "DELETE"
    ],
    "answer": "GET"
  },
  {
    "question": "What is the purpose of the 'useEffect' hook in React?",
    "options": [
      "To manage component state",
      "To run side effects in function components",
      "To declare CSS styles",
      "To handle form submissions"
    ],
    "answer": "To run side effects in function components"
  },
  {
    "question": "Which CSS property is used to change the text color of an element?",
    "options": [
      "background-color",
      "font-size",
      "color",
      "text-align"
    ],
    "answer": "color"
  },
  {
    "question": "What is the default display value of a <div> element in CSS?",
    "options": [
      "inline",
      "block",
      "inline-block",
      "flex"
    ],
    "answer": "block"
  },
  {
    "question": "Which HTML tag is used to link an external JavaScript file?",
    "options": [
      "<script>",
      "<link>",
      "<style>",
      "<js>"
    ],
    "answer": "<script>"
  },
  {
    "question": "Which of the following is a key feature of React?",
    "options": [
      "One-way data binding",
      "Two-way data binding",
      "Automatic state management",
      "Native support for databases"
    ],
    "answer": "One-way data binding"
  },
  {
    "question": "Which of the following is not a valid data type in JavaScript?",
    "options": [
      "undefined",
      "null",
      "boolean",
      "character"
    ],
    "answer": "character"
  },
  {
    "question": "What is the use of the 'key' prop in React?",
    "options": [
      "To track the identity of each component",
      "To define the primary key in state",
      "To generate unique IDs for each element",
      "To handle form inputs"
    ],
    "answer": "To track the identity of each component"
  },
  {
    "question": "Which of the following is a valid way to style a React component using CSS?",
    "options": [
      "Inline styles",
      "CSS modules",
      "Styled-components",
      "All of the above"
    ],
    "answer": "All of the above"
  }
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAnswerOptionClick = (selected) => {
    if (selected === quizQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption(null);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="app">
      {showScore ? (
        <Score score={score} totalQuestions={quizQuestions.length} />
      ) : (
        <>
          <Question 
            question={quizQuestions[currentQuestion].question}
            current={currentQuestion + 1}
            total={quizQuestions.length}
          />
          <Options
            options={quizQuestions[currentQuestion].options}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
          <button
            className="next-button"
            onClick={() => handleAnswerOptionClick(selectedOption)}
            disabled={!selectedOption}
          >
            Next >>
          </button>
        </>
      )}
    </div>
  );
}

export default App;