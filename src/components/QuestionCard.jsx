import { motion } from "framer-motion"
function QuestionCard({ question, options, answer, onCorrect, onWrong, selected, setSelected, questionNumber, totalQuestion, answeredInTime, setAnsweredInTime }) {
    function OptionStyle(option) {
        if (!selected) {
            return 'bg-[#09091a] border-[#22224a] text-[#d8d4ff] hover:border-[#5a4aee] hover:bg-[#0d0d22] hover:text-white'
        }
        if (option === answer) {
            return 'bg-[#00120a] border-[#00aa55] text-[#00e887] option-glow-correct'
        }
        if (option === selected) {
            return 'bg-[#150008] border-[#aa0033] text-[#ff4466] option-glow-wrong'
        }
        return 'bg-[#09091a] border-[#16163a] text-[#3a3a6a] opacity-50'
    }

    const optionLabels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L']

    return (
        <motion.div className="flex flex-col w-full"
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

            <h2 className="text-white text-lg font-semibold leading-relaxed bg-[#08081a] border border-[#2a2a5a] rounded-2xl p-4 mb-4"> {question}</h2>
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
                        className={`w-full flex items-center text-left cursor-pointer gap-3 p-3 rounded-lg border text-sm font-semibold mb-4 ${OptionStyle(option)}`}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index + 1) * 0.4, duration: 0.4 }}
                    >
                        <span className={`px-2 py-1 rounded-lg border text-xs font-semibold ${OptionStyle(option)}`}>{optionLabels[index]}</span>
                        {option}
                    </motion.button>))
                }
            </ul>
            {selected && selected === answer ? <p className="text-center bg-[#00120a] border border-[#00aa55] text-[#00e887] font-semibold py-2 px-4 rounded-lg mb-2">That's correct, You won!</p> : selected && selected !== answer ? <p className="text-center bg-[#150008] text-[#ff4466] border border-[#aa0033] font-semibold py-2 px-4 rounded-lg mb-2">That's a wrong answer.</p> : null}

            <button
                onClick={() => { selected === answer ? onCorrect() : onWrong() }}
                disabled={selected === null}
                className="w-full bg-[#5a4aee] active:scale-[0.98] active:bg-[#4a3add] text-white font-semibold py-3 px-2 rounded-lg tracking-widest cursor-pointer disabled:opacity-50 text-sm font-jetbrains uppercase"
            >Next Question →</button>
        </motion.div >
    )
}

export default QuestionCard