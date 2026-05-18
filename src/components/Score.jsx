import timerSound from '../Assets/sounds/timer.wav'
function Score({ score, highScore, timer, selected }) {

    const timerAudio = new Audio(timerSound)
    timerAudio.volume = 0.2

    if(timer == 7 && selected === null){
        timerAudio.play()
    }

    if(selected !== null){
        timerAudio.pause()
    }

    return (
        <div className="flex w-full justify-between items-center">

            <p className="bg-[#08081a] border border-[#1e1e42] rounded-xl px-5 py-2 text-[#5a4aee] text-[10px] tracking-widest uppercase font-jetbrains flex flex-col items-center font-bold">Score <span className="text-lg text-white">{score}</span></p>

            <p className={`border rounded-xl px-5 py-2.5 flex-1 mx-2 text-xs tracking-widest self-start flex flex-col items-center uppercase font-jetbrains ${timer <= 7 && selected === null ? 'bg-[#1a0008] text-[rgba(255,51,102,0.6)] border-[#aa0033] animate-pulse' : timer <= 16 ? 'bg-[#140900] text-[rgba(255,149,0,0.6)] border-[#aa5500]' : 'bg-[#08081a] border-[#2a2a5a] text-[rgba(90,74,238,0.9)]'}`}>Time <span className={`font-bold lowercase text-2xl leading-tight ${timer <= 7 ? 'text-[#ff3366]' : timer <= 16 ? 'text-[#ff9500]' : 'text-[#9a8cee]'}`}
            aria-label={`Time remaining: ${timer} seconds`}
            aria-live={timer === 30 || timer === 10 || timer === 5 ? "polite" : "off"}
            >{timer}s</span></p>

            <p className="bg-[#08081a] border border-[#1e1e42] rounded-xl px-5.5 py-2 text-[#5a4aee] text-[10px] tracking-widest uppercase font-jetbrains flex flex-col items-center font-bold">Best <span className="text-lg text-white">{highScore}</span></p>
        </div>
    )
}

export default Score