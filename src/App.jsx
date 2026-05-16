import './App.css'
import QuestionCard from './components/QuestionCard'
import Score from './components/Score'
import Start from './components/Start'
import QuizOver from './components/QuizOver'
import TimeOver from './components/TimeOver'
import useQuiz from './hooks/useQuiz'

function App() {
  const {
    score, setScore, selected, setSelected,
    highScore, totalQuestion, fetchQuestion,
    setQuizover, setQuestionCount, setTimer,
    setTimeOver, timer, question, gameStarted,
    quizover, loading, timeOver, questionCount,
    handleCorrect, handleWrong, onStart,
    answeredInTime, setAnsweredInTime
  } = useQuiz()

  return (
    <div className="min-h-screen w-full bg-[#04040c] relative overflow-hidden">
      <div className="w-125 h-125 bg-[#3b20cc] blur-[220px] opacity-[0.12] absolute -top-40 -left-40 z-0 pointer-events-none"></div>
      <div className="w-100 h-100 bg-[#5a00cc] blur-[200px] opacity-[0.10] absolute -bottom-32 -right-32 z-0 pointer-events-none"></div>
      <div className="w-75 h-75 bg-[#2200aa] blur-[180px] opacity-[0.08] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"></div>

      <header className="text-center relative z-10 pt-8">
        <p className="text-[#5a4aee] text-xs text-center tracking-[0.35em] font-bold font-jetbrains uppercase z-10">Quiz Show</p>
        <h1 className="text-white text-xl font-bold text-center tracking-[0.20em] pt-2 z-10 font-jetbrains uppercase">Nation Wants To Guess</h1>
        <div className="h-px bg-linear-to-r from-transparent via-[#5a4aee] to-transparent mx-auto mt-3 mb-2 w-40"></div>
      </header>
      <div className="max-w-xl mx-auto px-4 py-8 flex flex-col gap-4 items-center z-10">
        {
          !gameStarted ?
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
                  <div className="w-12 h-12 border-3 border-[#1e1e42] border-t-[#5a4aee] rounded-full animate-spin"></div>
                  <p className="text-[#5a4aee] text-sm text-center font-jetbrains tracking-widest">Fetching Question...</p>
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
                  </>
        }
      </div >
    </div >
  )
}

export default App