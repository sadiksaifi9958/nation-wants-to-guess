function QuestionCard({ question, options, answer, onCorrect, onWrong, selected, setSelected }) {
    const optionColors = [
        'bg-[#1a0505] text-[#ff6b6b] border-[#cc2200]',
        'bg-[#1a0e00] text-[#ffaa44] border-[#cc6600]',
        'bg-[#00081a] text-[#66aaff] border-[#0055cc]',
        'bg-[#001a16] text-[#44ddbb] border-[#008866]',
        'bg-[#0f001a] text-[#cc88ff] border-[#7700cc]',
        'bg-[#1a1000] text-[#ffdd44] border-[#aa8800]',
        'bg-[#001a1a] text-[#44ffee] border-[#008888]',
    ]

    const optionLabels = ['A', 'B', 'C', 'D', 'E', 'F', 'G']

    return (
        <div className="flex flex-col">
            <h2 className="text-white text-lg font-semibold leading-relaxed bg-[#080830] border border-[#1e3aaa] rounded-xl p-4 mb-4">Question: {question}</h2>
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
                        className={`w-full flex gap-3 p-3 rounded-lg border text-sm font-semibold mb-4 ${selected ? (option === answer ? 'bg-[#001a16] text-[#44ddbb] border-[#008866]' : option === selected ? 'bg-[#1a0505] text-[#ff6b6b] border-[#cc2200]' : 'bg-[#080830] border-[#1e3aaa] text-white') : 'bg-[#080830] border-[#1e3aaa] text-white'}`}
                    >
                        <span className={`rounded-full px-2 py-0.5 text-xs font-bold border ${selected ? (option === answer ? 'bg-[#001a16] text-[#44ddbb] border-[#008866]' : option === selected ? 'bg-[#1a0505] text-[#ff6b6b] border-[#cc2200]' : 'bg-[#080830] border-[#1e3aaa] text-white') : 'bg-[#080830] border-[#1e3aaa] text-white'}`}>{optionLabels[index]}</span>
                        {option}
                    </button>))
                }
            </ul>
            {selected && selected === answer ? <p className="bg-[#008866] text-white border-[#008866] text-sm font-semibold leading-relaxed border rounded-lg p-2 mb-3 text-center tracking-widest">That's correct, You won!</p> : selected && selected !== answer ? <p className="bg-[#cc2200] text-white border-[#cc2200] text-center text-sm font-semibold leading-relaxed border rounded-lg p-2 mb-3 tracking-widest">That's a wrong answer.</p> : null}

            <button
                onClick={() => { selected === answer ? onCorrect() : onWrong() }}
                disabled={selected === null}
                className="w-full bg-[#1133cc] active:bg-[#0a2299] text-white font-semibold py-2 px-4 rounded-lg tracking-widest cursor-pointer disabled:opacity-50 text-sm"
            >Next Question</button>
        </div >
    )
}

export default QuestionCard