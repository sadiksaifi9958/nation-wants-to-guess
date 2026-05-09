function Score({ score, highScore, timer }) {
    return (
        <div className="flex w-full justify-between">

            <p className="bg-[#0d1040]  border border-[#2233aa] rounded-full px-4 py-1 text-[#aabbff] text-sm font-bold tracking--widest self-start">Score: {score}</p>

            <p className={`border  rounded-full px-4 py-1  text-md font-bold tracking--widest self-start
            ${timer <= 7 ? 'bg-[#1a0000] text-[#ff5555] border-[#ff2222] animate-pulse' : timer <= 16 ? 'bg-[#1a1200] text-[#ffbb33] border-[#ff8800]' : 'bg-[#0d1040] border-[#2233aa] text-[#aabbff]'}`}>Remaining Time: {timer}s
            </p>
            <p className="bg-[#0d1040]  border border-[#2233aa] rounded-full px-4 py-1 text-[#aabbff] text-sm font-bold tracking--widest self-end">High Score: {highScore}</p>
        </div >
    )
}

export default Score