import { useState, useEffect } from 'react'
import './App.css'
import QuestionCard from './components/QuestionCard'
import Score from './components/Score'


function App() {
  const [gameStarted, setGameStarted] = useState(false)
  const [question, setQuestion] = useState(null)
  const [questionCount, setQuestionCount] = useState(0)
  const [loading, setLoading] = useState(false)
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
    }, 3000)
    answeredInTime(false)
  }

  useEffect(() => {
    fetchQuestion()
  }, [])

  const [score, setScore] = useState(0)
  const [quizover, setQuizover] = useState(false)
  const [selected, setSelected] = useState(null)
  const [timer, setTimer] = useState(30)
  const [timeOver, setTimeOver] = useState(false)
  const [answeredInTime, setAnsweredInTime] = useState(false)

  function handleCorrect() {
    const newScore = score + 1
    setScore(score + 1)
    setSelected(null)
    fetchQuestion()
    setQuestionCount(questionCount + 1)
    if (newScore > highScore) {
      setHighScore(newScore)

    }
    setTimer(15)
    setAnsweredInTime(false)
  }

  useEffect(() => {
    localStorage.setItem("highScore", highScore)
  }, [highScore])

  function handleWrong() {
    setQuizover(true)
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
    <div className="min-h-screen w-full bg-[#050518]">
      <h1 className="text-white text-3xl font-bold text-center tracking-widest pt-5">Nation Wants To Guess</h1>
      <div className="max-w-xl mx-auto px-4 py-8 flex flex-col gap-4 items-center">
        {!gameStarted ?
          <>
            <h2 className="text-center text-white text-xl font-semibold p-4 mb-4">Inspired by the comedy quiz show 'Nation Wants To Guess' by comedian Gursimran Khamba, available on YouTube. All questions are based on the show.</h2>
            <ul className="flex flex-col items-start text-white gap-3 m-4 list-disc pl-5">
              <li className="text-md text-white">10 Questions</li>
              <li className="text-md text-white">+1 Score on correct answer</li>
              <li className="text-md text-white">quiz ends on wrong answer</li>
            </ul>
            <button
              className="w-full bg-[#1133cc] hover:bg-[#0a2299] text-white py-2 px-2 rounded-lg tracking-widest cursor-pointer active:scale-90 text-xl"
              onClick={onStart}
            >Start Quiz</button>
          </>
          :
          quizover ?
            <>
              <p className="text-center text-white text-2xl font-bold bg-[#0d1040] border border-[#2233aa] rounded-lg p-4 mb-4">Quiz Over! Your Score is: {score}/ {totalQuestion}</p>
              {score <= 3 ? (<p className="text-white">Better luck next time!</p>)
                : score <= 7 ? (<p className="text-white">Nice try!</p>) : (<p className="text-white">You are a true Nation Wants To Guess fan</p>)}

              <p className="bg-[#0d1040]  border border-[#2233aa] rounded-full px-4 py-1 text-[#aabbff] text-md font-bold tracking--widest self-center">High Score: {highScore}</p>
              <button
                className="w-full bg-[#1133cc] hover:bg-[#0a2299] text-white font-bold py-2 px-2 rounded-lg tracking-widest cursor-pointer active:scale-90"
                onClick={() => {
                  setScore(0);
                  fetchQuestion()
                  setQuizover(false)
                  setSelected(null)
                  setQuestionCount(0)
                }}
              >Restart Quiz</button>
            </>
            :
            loading ?
              <>
                <div className="w-16 h-16 border-5 border-slate-700 border-t-blue-500 rounded-full animate-spin"></div>
                <p className="text-[#aabbff] text-md text-center">Loading...</p>
              </>

              :
              timeOver ?
                <>
                  <p className="text-center text-white text-2xl font-bold bg-[#0d1040] border border-[#2233aa] rounded-lg p-4 mb-4">Time Over! Your Score is: {score}/ {totalQuestion}</p>

                  <p className="bg-[#0d1040]  border border-[#2233aa] rounded-full px-4 py-1 text-[#aabbff] text-md font-bold tracking--widest self-center">High Score: {highScore}</p>
                  <button
                    className="w-full bg-[#1133cc] hover:bg-[#0a2299] text-white font-bold py-2 px-2 rounded-lg tracking-widest cursor-pointer active:scale-90"
                    onClick={() => {
                      setScore(0);
                      fetchQuestion()
                      setQuizover(false)
                      setSelected(null)
                      setQuestionCount(0)
                      setTimeOver(false)
                      setTimer(30)
                    }}
                  >Start Again</button>
                </>
                :
                <>
                  <Score
                    score={score}
                    highScore={highScore}
                    timer={timer}
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
