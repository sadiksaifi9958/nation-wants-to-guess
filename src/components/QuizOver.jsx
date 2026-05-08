function QuizOver({score, setScore, fetchQuestion, setQuizover, setQuestionCount, totalQuestion, highScore, setSelected}){
    return(
        <div className="flex flex-col items-center w-full gap-4">
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
        </div>
    )
}

export default QuizOver