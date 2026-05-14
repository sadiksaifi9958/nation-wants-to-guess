import { motion } from "framer-motion"
function QuestionCard({ question, options, answer, onCorrect, onWrong, selected, setSelected, questionNumber, totalQuestion, answeredInTime, setAnsweredInTime }) {
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
        <motion.div className="flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex flex-col mb-4 bg-[#0a0a1a] border border-[#2a2a5a] rounded-2xl w-full overflow-hidden">
                <div className="bg-linear-to-r from-[#7b61ff] via-[#a78bfa] to-[#4c44ee] w-full h-0.5 rounded-full"></div>
                <div className="flex justify-between items-center px-5  pt-5 pb-2">
                    <div className="text-[#5a4aee] text-xs font-jetbrains uppercase tracking-widest">Question</div>
                    <div className="text-white text-xs font-jetbrains">{questionNumber + 1}
                        <span className="text-[#3a3a6a]">{` / ${totalQuestion}`}</span>
                    </div>
                </div>

                <div className="px-5 pb-5">
                    <div className="h-1.5 bg-[#14143a] rounded-full overflow-hidden">
                        <div className="h-full bg-linear-to-r from-[#5a4aee] to-[#a78bfa] rounded-xl transition-all duration-400 ease"
                            style={{ width: `${((questionNumber + 1) / totalQuestion) * 100}%` }}
                        ></div>
                    </div>
                </div>
            </div>
            
            <h2 className="text-white text-lg font-semibold leading-relaxed bg-[#080830] border border-[#1e3aaa] rounded-xl p-4 mb-4"> {question}</h2>
            <ul>
                {options.map((option, index) => (
                    <motion.button
                        key={index}
                        onClick={() => {
                            if (selected === null) {
                                setSelected(option);
                            }
                            setAnsweredInTime(true)
                        }}
                        disabled={selected !== null}
                        className={`w-full flex items-start text-left cursor-pointer gap-3 p-3 rounded-lg border text-sm font-semibold mb-4 hover:scale-105 active:scale-95 ${selected ? (option === answer ? 'bg-[#001a16] text-[#44ddbb] border-[#008866]' : option === selected ? 'bg-[#1a0505] text-[#ff6b6b] border-[#cc2200]' : 'bg-[#080830] border-[#1e3aaa] text-white') : 'bg-[#080830] border-[#1e3aaa] text-white'}`}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index + 1) * 0.4, duration: 0.4 }}
                    >
                        <span className={`rounded-full px-2 w-6 h-6 text-xs font-bold border min-height-16 flex shrink-0 items-center justify-center ${selected ? (option === answer ? 'bg-[#001a16] text-[#44ddbb] border-[#008866]' : option === selected ? 'bg-[#1a0505] text-[#ff6b6b] border-[#cc2200]' : 'bg-[#080830] border-[#1e3aaa] text-white') : 'bg-[#080830] border-[#1e3aaa] text-white'}`}>{optionLabels[index]}</span>
                        {option}
                    </motion.button>))
                }
            </ul>
            {selected && selected === answer ? <p className="text-center bg-[#001a00] text-[#44ff88] font-semibold py-2 px-4 rounded-lg mb-2">That's correct, You won!</p> : selected && selected !== answer ? <p className="text-center bg-[#1a0000] text-[#ff6666] font-semibold py-2 px-4 rounded-lg mb-2">That's a wrong answer.</p> : null}

            <button
                onClick={() => { selected === answer ? onCorrect() : onWrong() }}
                disabled={selected === null}
                className="w-full bg-[#1133cc] active:bg-[#0a2299] text-white font-semibold py-2 px-4 rounded-lg tracking-widest cursor-pointer disabled:opacity-50 text-sm"
            >Next Question</button>
        </motion.div >
    )
}

export default QuestionCard