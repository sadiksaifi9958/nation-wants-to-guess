function QuestionCard({ question, options, answer, onCorrect, onWrong, selected, setSelected }) {
    return (
        <div>
            <h2>{question}</h2>
            <ul>
                {options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            if (selected === null) {
                                setSelected(option);
                            }
                        }}
                        style={{ backgroundColor: selected ? (option === answer ? 'green' : option === selected ? 'red' : '') : '' }}
                        disabled={selected !== null}
                    >{option}</button>))
                }
            </ul>
            {selected && selected === answer ? <p>That's correct, You won</p> : selected && selected !== answer ? <p>That's a wrong answer</p> : null}
            
            <button
                onClick={() => { console.log(`selected: ${selected}, answer: ${answer}`); selected === answer ? onCorrect(): onWrong()}}
                disabled={selected === null}
            >Next Question</button>
        </div >
    )
}

export default QuestionCard