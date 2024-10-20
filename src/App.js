import React, { useState, useEffect} from "react";
import './App.css';
import Question from "./components/Question";
import Options from "./components/Options";
import Score from "./components/Score";
import axios from "axios";


function App() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    // Fetch questions from JSON server
    axios.get("http://localhost:3001/questions")
      .then(response => {
        setQuestions(response.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleAnswerOptionClick = (selected) => {
    if (selected === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption(null);
    } else {
      setShowScore(true);
    }
    if (questions.length === 0) {
      return <div>Loading questions...</div>;
    }
  };

  return (
    <div className="app">
      {showScore ? (
        <Score score={score} totalQuestions={questions.length} />
      ) : (
        <>
          {/* Check if questions exist before trying to access the question property */}
          {questions[currentQuestion] && (
            <>
              <Question 
                question={questions[currentQuestion].question}
                current={currentQuestion + 1}
                total={questions.length}
              />
              <Options
                options={questions[currentQuestion].options}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
              />
              <button
            className="next-button"
            onClick={() => handleAnswerOptionClick(selectedOption)}
            disabled={!selectedOption}
          >
            Next {">"}{">"}
          </button>
            </>
          )}
        </>
      )}
    </div>
  );
}


export default App;