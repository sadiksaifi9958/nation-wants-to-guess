import './App.css'
import QuestionCard from './components/QuestionCard'
import Score from './components/Score'
import Start from './components/Start'
import QuizOver from './components/QuizOver'
import TimeOver from './components/TimeOver'
import Loading from './components/Loading'
import Error from './components/Error'
import Header from './components/Header'
import useQuiz from './hooks/useQuiz'

function App() {
  const {
    score, setScore, selected, setSelected,
    highScore, totalQuestion, fetchQuestion,
    setQuizover, setQuestionCount, setTimer,
    setTimeOver, timer, question, gameStarted,
    quizover, loading, timeOver, questionCount,
    handleCorrect, handleWrong, onStart,
    answeredInTime, setAnsweredInTime, error
  } = useQuiz()

  return (
    <div className="min-h-screen w-full bg-[#04040c] relative overflow-hidden">
      <div className="absolute w-140 h-140 rounded-full bg-[#3b20cc] blur-[220px] opacity-[0.12] -top-64 -left-64 z-0 pointer-events-none"></div>
      <div className="absolute w-110 h-110 rounded-full bg-[#5a00cc] blur-[200px] opacity-[0.10] -bottom-52 -right-52 z-0 pointer-events-none"></div>
      <div className="absolute w-80 h-80 rounded-full bg-[#2200aa] blur-[180px] opacity-[0.08] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"></div>

      <Header/>
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
              error?
              <Error
              error={error}
              fetchQuestion={fetchQuestion}
              />
              : 
              loading ?
                <Loading/>

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