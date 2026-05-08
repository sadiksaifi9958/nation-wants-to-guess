function Start({onStart}){
    return (
        <div className="flex w-full flex-col items-center">
            <h2 className="text-center text-white text-xl font-semibold p-4 mb-4">Inspired by the comedy quiz show 'Nation Wants To Guess' by comedian Gursimran Khamba, available on YouTube. All questions are based on the show.</h2>
            <ul className="flex flex-col items-start text-white gap-3 m-4 list-disc pl-5">
              <li className="text-md text-white">10 Questions</li>
              <li className="text-md text-white">+1 Score on correct answer</li>
              <li className="text-md text-white">quiz ends on wrong answer</li>
            </ul>
            <button
              className="w-full bg-[#1133cc] hover:bg-[#0a2299] text-white py-2 px-2 rounded-lg tracking-widest cursor-pointer active:scale-90 text-xl"
              onClick={onStart}
            >Start Quiz</button>
        </div>
        
    )
}

export default Start