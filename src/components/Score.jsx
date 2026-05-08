function Score({score, highScore}) {
    return (
        <div className="flex w-full justify-between">
            <p className="bg-[#0d1040]  border border-[#2233aa] rounded-full px-4 py-1 text-[#aabbff] text-sm font-bold tracking--widest self-start">Score: {score}</p>
            <p className="bg-[#0d1040]  border border-[#2233aa] rounded-full px-4 py-1 text-[#aabbff] text-sm font-bold tracking--widest self-end">High Score: {highScore}</p>
        </div>
    )
} 

export default Score