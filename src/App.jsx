import { useState } from 'react'
import './App.css'
import QuestionCard from './components/QuestionCard'

const questions = [
  {
    question: "Which language styles a webpage?",
    options: ["Python", "CSS", "Java", "C++"],
    answer: "CSS"
  },
  {
    question: "What does JS Stand for?",
    options: ["Just Style", "JavaScript", "Java Stream", "Joint Syntax"],
    answer: "JavaScript"
  }
]

function App() {
  const [current, setCurrent] = useState(0)

  const [score, setScore] = useState(0)



  function handleNext() {
    setCurrent(current + 1)
  }

  return (

    <div>
      {current === questions.length ? <p>Quiz Over! Your Score is: {score}</p> : null}
      <button onclick={() => {
        setCurrent(0);
        setScore(0);
      }}>Restart Quiz</button>
      <>
        <h1>QuizHappens</h1>
        <QuestionCard
          question={questions[current].question}
          options={questions[current].options}
          answer={questions[current].answer}
          onNext={handleNext}
          score={score}
          setScore={setScore} />
      </>
      }
    </div >
  )
}

export default App
