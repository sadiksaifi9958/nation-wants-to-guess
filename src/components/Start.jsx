import clickSound from '../Assets/sounds/click.mp3'

function Start({ onStart }) {
  const clickAudio = new Audio(clickSound)
  clickAudio.volume = 0.3

  return (
    <div className="flex flex-col gap-0 items-center">
      <p className="text-[#5a4aee] bg-[#0a0a1a] border border-[#2a2a5a] uppercase font-jetbrains rounded-full text-xs tracking-[0.25em] py-1.5 px-4 font-jetbrains">Comedy Quiz Show</p>

      <div className="bg-[#08081a] border border-[#1e1e42] rounded-2xl flex flex-col items-center mt-6 overflow-hidden">
        <div className="h-0.5 bg-linear-to-r from-[#7b61ff] via-[#a78bfa] to-[#4c44ee] w-full"></div>

        <div className="p-7">
          <p className="text-[#c0b8ff] text-center text-base leading-relaxed mb-5 font-medium">Inspired by the comedy quiz show <span className="text-white font-semibold">Nation Wants To Guess</span> by comedian Gursimran Khamba, available on YouTube. All questions are based on the show.</p>

          <div className="flex items-center gap-3 mb-5">
            <div className="flex-1 h-px bg-[#1a1a35]"></div>
            <span className="font-jetbrains text-[#3a3a70] text-xs tracking-widest uppercase leading-relaxed">How to play</span>
            <div className="flex-1 h-px bg-[#1a1a35]"></div>
          </div>

          <ul className=" flex flex-col gap-4">
            {[
              { text: "10 exciting quiz rounds" },
              { text: "Earn one point for every correct answer" },
              { text: "One wrong answer ends the game instantly" },
            ].map((rule, i) => (
              <li key={i} className="text-[#c0b8ff] text-sm font-medium leading-relaxed px-3 py-2.5 rounded-xl bg-[#0d0d22] border border-[#1a1a35] marker:text-[#c0b8ff]-400 flex gap-3 items-center">
                <span className="text-xs">◆</span>
                <span>{rule.text}</span>
              </li>
            ))}
          </ul>

          <p className="text-[#9a8cc0] text-center text-sm border border-[#1a1a35] bg-[#0a0820] leading-relaxed rounded-xl px-3 py-3 my-8 font-jetbrains">30 seconds per question</p>

          <button
            className="w-full bg-[#5a4aee] text-white py-3 px-2 rounded-lg tracking-widest cursor-pointer active:scale-[0.98] hover:bg-[#6b5bff] active:bg-[#4a3add] font-bold text-md transition-all duration-300 uppercase font-jetbrains"
            onClick={()=>{
              clickAudio.play()
              onStart()
            }}
          >Start Quiz</button>
        </div>
      </div>
    </div>
  )
}

export default Start