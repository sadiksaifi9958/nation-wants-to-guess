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
    <div className="min-h-screen w-full bg-[#050518]">
      <h1 className="text-white text-3xl font-bold text-center tracking-widest pt-5">Nation Wants To Guess</h1>
      <div className="max-w-xl mx-auto px-4 py-8 flex flex-col gap-4">
        {quizover ?
          <>
            <p className="text-[#0d1040] border border-[#0d1040] bg-[#aabbff] text-xl font-bold text-center tracking-widest">Quiz Over! Your Score is: {score}</p>
            <button
              className="bg-[#0d1040]  border border-[#2233aa] rounded-full px-4 py-1 text-[#aabbff] text-sm font-bold tracking--widest w-fit self-center cursor-pointer active:scale-90"
              onClick={() => {
                setScore(0);
                fetchQuestion()
                setQuizover(false)
                setSelected(null)}}
            >Restart Quiz</button>
          </>
          :
          !question ? <p className="text-[#aabbff] text-md text-center">Loading...</p>
            :
            <>
              <p className="bg-[#0d1040]  border border-[#2233aa] rounded-full px-4 py-1 text-[#aabbff] text-xs font-bold tracking--widest w-fit">Score: {score}</p>
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
    </div>
  )
}

export default App
