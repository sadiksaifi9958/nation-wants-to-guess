import clickSound from '../Assets/sounds/click.mp3'
function TimeOver({ score, setScore, fetchQuestion, setTimeOver, setQuestionCount, totalQuestion, highScore, setSelected, setTimer }) {

  const FeedbackStyle =
    score <= 3 ? { color: 'text-[#ff4466]', bg: 'bg-[#150008] border-[#aa0033]', text: "Better luck next time!" } : score <= 7 ? { text: 'text-[#ff9500]', bg: 'bg-[#140900]  border-[#aa5500]', text: 'Nice try!' } : { text: 'text-[#00e887]', bg: 'bg-[#00120a] border-[#00aa55]', text: 'You are a true fan' }

    const clickAudio = new Audio(clickSound)
    clickAudio.volume = 0.3

    clickAudio.play()

  return (
    <div className="flex flex-col items-center w-full gap-4">
      <div className="bg-[#08081a] border border-[#1e1e42] rounded-xl flex flex-col items-center w-full gap-2 overflow-hidden">
        <div className="h-0.5 w-full rounded-xl bg-linear-to-r from-[#aa0033] via-[#ff4466] to-[#7b61ff]"></div>
        <div className="h-18 w-18 rounded-xl border border-[#1e1e42] bg-[#0d0d22] text-3xl text-white flex items-center justify-center m-5">⏱</div>
        <div className="text-center text-[#ff9500] text-xs font-bold font-jetbrains tracking-[0.20em] uppercase">Time's Up</div>
        <div className="text-center text-[#9a8cee] text-lg font-bold">Your Final Score</div>
        <div className="flex items-end gap-1 mt-2">
          <div className="text-white text-7xl font-jetbrains">{score}</div>
          <div className="text-[#3a3a6a] text-3xl font-jetbrains">{`/ ${totalQuestion}`}</div>
        </div>

        <div className={`rounded-full px-3 py-2 mb-8 border mt-4 font-jetbrains text-sm  ${FeedbackStyle.color} ${FeedbackStyle.bg}`}>{FeedbackStyle.text}</div>
      </div>

      <div className="bg-[#08081a]  border border-[#1e1e42] rounded-xl px-4 py-4  w-full  justify-center flex gap-2 items-center">
        <span className="text-base">🏆</span>
        <span className="text-[#5a4aee] text-sm font-bold tracking--widest uppercase font-jetbrains">Best</span>
        <span className="text-white font-jetbrains text-xl">{highScore}</span>
      </div>
      <button
        className="w-full bg-[#5a4aee] active:scale-[0.98] active:bg-[#4a3add] text-white font-semibold py-3 px-2 rounded-xl tracking-widest cursor-pointer text-sm font-jetbrains uppercase"
        onClick={() => {
          setScore(0);
          fetchQuestion()
          setTimeOver(false)
          setSelected(null)
          setQuestionCount(0)
          setTimer(30)
        }}
      >Try Again</button>
    </div>
  )
}

export default TimeOver