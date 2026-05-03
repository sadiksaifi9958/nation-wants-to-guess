import { useState, useEffect} from 'react'
import './App.css'
import QuestionCard from './components/QuestionCard'



function App() {
  const [question, setQuestion] = useState(null)

  async function fetchQuestion() {
    const response = await fetch('https://nwtg-api.onrender.com/questions/random');
    const data = await response.json()
    setQuestion(data)
  }

  useEffect(() => {
    fetchQuestion()
  },[])

  const [score, setScore] = useState(0)

  return (

    <div>
      {!question ?
        <>
        <p>Loading...</p>
          {/* <p>Quiz Over! Your Score is: {score}</p>
          <button onClick={() => {
            setCurrent(0);
            setScore(0);
          }}>Restart Quiz</button> */}
        </> :
        <>
          <h1>QuizHappens</h1>
          <QuestionCard
            question={question.question}
            options={question.options}
            answer={question.answer}
            onNext={fetchQuestion}
            score={score}
            setScore={setScore}
          />
        </>}
    </div >
  )
}

export default App
