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
        <div className="flex gap-4 flex-col">
            <h2 className="text-white text-lg font-semibold leading-relaxed bg-[#080830] border border-[#1e3aaa] rounded-xl p-4 mb-2">Question: {question}</h2>
            <ul>
                {options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            if (selected === null) {
                                setSelected(option);
                            }
                        }}
                        // style={{ backgroundColor: selected ? (option === answer ? 'green' : option === selected ? 'red' : '') : '' }}
                        disabled={selected !== null}
                        className="w-full flex items-center gap-3 p-3 rounded-lg text-white bg-[#080830] border border-[#1e3aaa] text-sm font-semibold mb-2 cursor-pointer active:scale-95"
                    >
                        <span className="text-white bg-[#080830] border border-[#1e3aaa] rounded-full px-2 py-0.5 text-xs font-bold">{optionLabels[index]}</span>
                        {option}
                    </button>))
                }
            </ul>
            {selected && selected === answer ? <p className="bg-[#001a16] text-[#44ddbb] border-[#008866] text-sm font-semibold leading-relaxed border rounded-xl p-3 mb-2 text-center">That's correct, You won!</p> : selected && selected !== answer ? <p className="bg-[#1a0505] text-[#ff6b6b] border-[#cc2200] text-center text-sm font-semibold leading-relaxed border rounded-xl p-3 mb-2">That's a wrong answer.</p> : null}

            <button
                onClick={() => { selected === answer ? onCorrect() : onWrong() }}   
                disabled={selected === null}
                className="bg-[#0d1040]  border border-[#2233aa] rounded-full px-4 py-1 text-[#aabbff] text-sm font-bold tracking--widest w-fit self-end disabled:hidden cursor-pointer active:scale-90"
            >Next Question</button>
        </div >
    )
}

export default QuestionCard