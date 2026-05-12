function Score({ score, highScore, timer, selected }) {
    return (
        <div className="flex w-full justify-between items-center">

            <p className="bg-[#08081a] border border-[#1e1e42] rounded-xl px-5 py-2 text-[#5a4aee] text-[10px] tracking-widest uppercase font-jetbrains flex flex-col items-center">Score <span className="text-xl text-white">{score}</span></p>

            <p className={`border rounded-xl px-42 py-3  text-xs font-bold tracking-widest self-start flex flex-col items-center uppercase font-jetbrains ${timer <= 7 && selected === null ? 'bg-[#1a0008] text-[#ff3366] border-[#aa0033] animate-pulse' : timer <= 16 ? 'bg-[#140900] text-[#ff9500] border-[#aa5500]' : 'bg-[#08081a] border-[#2a2a5a] text-[#2a2a5a]'}`}>Time <span className="text-white lowercase text-2xl leading-tight">{timer}s</span></p>

            <p className="bg-[#08081a] border border-[#1e1e42] rounded-xl px-5 py-2 text-[#5a4aee] text-[10px] tracking-widest uppercase font-jetbrains flex flex-col items-center">Best <span className="text-xl text-white">{highScore}</span></p>
        </div>
    )
}

export default Score