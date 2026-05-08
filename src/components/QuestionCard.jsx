function QuestionCard({ question, options, answer, onCorrect, onWrong, selected, setSelected, questionNumber, totalQuestion }) {
    const optionColors = [
        'bg-[#1a0505] text-[#ff6b6b] border-[#cc2200]',
        'bg-[#1a0e00] text-[#ffaa44] border-[#cc6600]',
        'bg-[#00081a] text-[#66aaff] border-[#0055cc]',
        'bg-[#001a16] text-[#44ddbb] border-[#008866]',
        'bg-[#0f001a] text-[#cc88ff] border-[#7700cc]',
        'bg-[#1a1000] text-[#ffdd44] border-[#aa8800]',
        'bg-[#001a1a] text-[#44ffee] border-[#008888]',
    ]

    const optionLabels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L']

    return (
        <div className="flex flex-col">
            <div className="flex flex-col mb-4 p-4 bg-[#080830] border border-[#1e3aaa] rounded-lg w-full">
                <h3 class="text-white text-center text-2xl font-bold rounded-xl p-4">{`Question No. ${questionNumber + 1} / ${totalQuestion}`}
                </h3>
                <div className="h-4 bg-slate-700 rounded-xl w-lg m-3">
                    <div className="h-full bg-blue-500 rounded-xl transition-all duration-400 ease"
                        style={{ width: `${((questionNumber + 1) / totalQuestion) * 100}%` }}
                    ></div>
                </div>
            </div>
            <h2 className="text-white text-lg font-semibold leading-relaxed bg-[#080830] border border-[#1e3aaa] rounded-xl p-4 mb-4"> {question}</h2>
            <ul>
                {options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            if (selected === null) {
                                setSelected(option);
                            }
                        }}
                        disabled={selected !== null}
                        className={`w-full flex items-start text-left cursor-pointer gap-3 p-3 rounded-lg border text-sm font-semibold mb-4 hover:scale-105 active:scale-95 ${selected ? (option === answer ? 'bg-[#001a16] text-[#44ddbb] border-[#008866]' : option === selected ? 'bg-[#1a0505] text-[#ff6b6b] border-[#cc2200]' : 'bg-[#080830] border-[#1e3aaa] text-white') : 'bg-[#080830] border-[#1e3aaa] text-white'}`}
                    >
                        <span className={`rounded-full px-2 w-6 h-6 text-xs font-bold border min-height-16 flex flex-shrink-0 items-center justify-center ${selected ? (option === answer ? 'bg-[#001a16] text-[#44ddbb] border-[#008866]' : option === selected ? 'bg-[#1a0505] text-[#ff6b6b] border-[#cc2200]' : 'bg-[#080830] border-[#1e3aaa] text-white') : 'bg-[#080830] border-[#1e3aaa] text-white'}`}>{optionLabels[index]}</span>
                        {option}
                    </button>))
                }
            </ul>
            {selected && selected === answer ? <p className="text-center bg-[#001a00] text-[#44ff88] font-semibold py-2 px-4 rounded-lg mb-2">That's correct, You won!</p> : selected && selected !== answer ? <p className="text-center bg-[#1a0000] text-[#ff6666] font-semibold py-2 px-4 rounded-lg mb-2">That's a wrong answer.</p> : null}

            <button
                onClick={() => { selected === answer ? onCorrect() : onWrong() }}
                disabled={selected === null}
                className="w-full bg-[#1133cc] active:bg-[#0a2299] text-white font-semibold py-2 px-4 rounded-lg tracking-widest cursor-pointer disabled:opacity-50 text-sm"
            >Next Question</button>
        </div >
    )
}

export default QuestionCard