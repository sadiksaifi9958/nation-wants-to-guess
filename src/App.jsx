import { useState, useEffect } from 'react'
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
  }, [])

  const [score, setScore] = useState(0)

  const [quizover, setQuizover] = useState(false)

  const [selected, setSelected] = useState(null)

  function handleCorrect() {
    setScore(score + 1)
    setSelected(null)
    fetchQuestion()
  }

  function handleWrong() {
    setQuizover(true)
  }

  return (

    <div>
      {quizover ?
        <>
          <p>Quiz Over! Your Score is: {score}</p>
          <button onClick={() => {
            setScore(0);
            fetchQuestion()
            setQuizover(false)
            setSelected(null)
          }}>Restart Quiz</button>
        </>
        :
        !question ? <p>Loading...</p>
          :
          <>
            <h1>Nation Wants To Guess</h1>
            <QuestionCard
              question={question.question}
              options={question.options}
              answer={question.answer}
              onCorrect={handleCorrect}
              onWrong={handleWrong}
              selected={selected}
              setSelected={setSelected}
            />
          </>}
    </div >
  )
}

export default App
