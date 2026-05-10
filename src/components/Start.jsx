function Start({ onStart }) {
  return (
    <div className="p-5 rounded-2xl flex w-full flex-col items-center bg-white/[0.07] backdrop-blur-2xl border border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.45)] relative overflow-hidden before:absolute before:inset-0 before:rounded-2xl before:border before:border-white/10 before:pointer-events-none">
      <div className="absolute inset-0 rounded-2xl bg-linear-to-b from-white/10 to-transparent pointer-events-none"></div>
      <h2 className="text-center text-gray-100 text-xl font-semibold p-4 mb-4 leading-9 max-w-162.5 w-130">Inspired by the comedy quiz show 'Nation Wants To Guess' by comedian Gursimran Khamba, available on YouTube. All questions are based on the show.</h2>
      <ul className="flex flex-col items-start gap-3 m-6 mt-4 text-gray-200 space-y-1 pl-5 list-disc self-start">
        <li className="text-md marker:text-blue-400">10 exciting quiz rounds</li>
        <li className="text-md marker:text-blue-400">Earn points for every correct answer</li>
        <li className="text-md marker:text-blue-400">One wrong answer ends the game</li>
      </ul>
      <button
        className="w-full bg-[#1133cc] text-white py-2 px-2 rounded-lg tracking-widest cursor-pointer hover:scale-[1.02] hover:shadow-[0_0_18px_rgba(37,99,235,0.35)]  text-xl transition-all duration-300"
        onClick={onStart}
      >Start Quiz</button>
    </div>

  )
}

export default Start