import { useState, useEffect } from 'react'
import './App.css'
import QuestionCard from './components/QuestionCard'
import Score from './components/Score'
import Start from './components/Start'
import QuizOver from './components/QuizOver'
import TimeOver from './components/TimeOver'


function App() {
  const [gameStarted, setGameStarted] = useState(false)
  const [question, setQuestion] = useState(null)
  const [questionCount, setQuestionCount] = useState(0)
  const [loading, setLoading] = useState(false)
  const [answeredInTime, setAnsweredInTime] = useState(false)
  const [highScore, setHighScore] = useState(() => {
    if (localStorage.getItem("highScore")) {
      return Number(localStorage.getItem("highScore"))
    } else
      return 0
  })

  const totalQuestion = 10

  function onStart() {
    setGameStarted(true)
  }

  async function fetchQuestion() {
    setQuestion(null)
    setLoading(true)
    setTimeout(async () => {
      const response = await fetch('https://nwtg-api.onrender.com/questions/random');
      const data = await response.json()
      setQuestion(data)
      setLoading(false)
    }, 2000)
    setAnsweredInTime(false)
  }

  useEffect(() => {
    fetchQuestion()
  }, [])

  const [score, setScore] = useState(0)
  const [quizover, setQuizover] = useState(false)
  const [selected, setSelected] = useState(null)
  const [timer, setTimer] = useState(30)
  const [timeOver, setTimeOver] = useState(false)


  function handleCorrect() {
    const newScore = score + 1
    setScore(score + 1)
    setSelected(null)
    fetchQuestion()
    setQuestionCount(questionCount + 1)
    if (newScore > highScore) {
      setHighScore(newScore)

    }
    setTimer(30)
    setAnsweredInTime(false)
  }

  useEffect(() => {
    localStorage.setItem("highScore", highScore)
  }, [highScore])

  function handleWrong() {
    setQuizover(true)
    setTimer(30)
  }

  useEffect(() => {
    if (!answeredInTime) {
      if (gameStarted && !loading && question && !quizover) {
        const interval = setInterval(() => {
          setTimer((previousTimer) => {
            if (previousTimer === 0) {
              setTimeOver(true)
              clearInterval(interval)
              return 0
            }
            return previousTimer - 1
          })
        }, 1000)
        return () => clearInterval(interval)
      }
    }


  }, [gameStarted, loading, question, quizover, answeredInTime])



  return (
    <div className="min-h-screen w-full bg-[#050518] relative overflow-hidden">
      <div className="w-[500px] h-[500px] bg-[#2255ff] blur-[160px] opacity-20 absolute -top-40 -left-40 z-0 pointer-events-none"></div>
      <div className="w-[400px] h-[400px] bg-[#7c3aed] blur-[160px] opacity-15 absolute -bottom-32 -right-32 z-0 pointer-events-none"></div>
      <div className="w-[300px] h-[300px] bg-[#2255ff] blur-[180px] opacity-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"></div>

      <h1 className="text-white text-3xl font-bold text-center tracking-widest pt-5 z-10">Nation Wants To Guess</h1>
      <div className="max-w-xl mx-auto px-4 py-8 flex flex-col gap-4 items-center z-10">
        {!gameStarted ?
          <Start
            onStart={onStart}
          />
          :
          quizover ?
            <QuizOver
              score={score}
              setScore={setScore}
              fetchQuestion={fetchQuestion}
              setQuizover={setQuizover}
              setQuestionCount={setQuestionCount}
              totalQuestion={totalQuestion}
              highScore={highScore}
              setSelected={setSelected}
            />
            :
            loading ?
              <>
                <div className="w-16 h-16 border-5 border-slate-700 border-t-blue-500 rounded-full animate-spin"></div>
                <p className="text-[#aabbff] text-md text-center">Loading...</p>
              </>

              :
              timeOver ?
                <TimeOver
                  score={score}
                  highScore={highScore}
                  totalQuestion={totalQuestion}
                  setScore={setScore}
                  fetchQuestion={fetchQuestion}
                  setQuizover={setQuizover}
                  setSelected={setSelected}
                  setQuestionCount={setQuestionCount}
                  setTimeOver={setTimeOver}
                  setTimer={setTimer}
                />
                :
                <>
                  <Score
                    score={score}
                    highScore={highScore}
                    timer={timer}
                    selected={selected}
                  />
                  <QuestionCard
                    question={question.question}
                    options={question.options}
                    answer={question.answer}
                    onCorrect={handleCorrect}
                    onWrong={handleWrong}
                    selected={selected}
                    setSelected={setSelected}
                    questionNumber={questionCount}
                    totalQuestion={totalQuestion}
                    answeredInTime={answeredInTime}
                    setAnsweredInTime={setAnsweredInTime}
                  />
                </>}
      </div >
    </div >
  )
}

export default App
