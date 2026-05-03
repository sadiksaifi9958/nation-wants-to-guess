import { useState } from 'react'

function QuestionCard({ question, options, answer, onNext, score, setScore }) {
    const [selected, setSelected] = useState(null);
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
                                option === answer ? setScore(score + 1) : null
                            }
                        }}
                        style={{ backgroundColor: selected ? (option === answer ? 'green' : option === selected ? 'red' : '') : '' }}
                        disabled={selected !== null}
                    >{option}</button>))
                }
            </ul>
            {selected && selected === answer ? <p>That's correct, You won</p> : selected && selected !== answer ? <p>That's a wrong answer</p> : null}
            
            <button
                onClick={() => { onNext(); setSelected(null) }}
                disabled={selected === null}
            >Next Question</button>
        </div >
    )
}

export default QuestionCard