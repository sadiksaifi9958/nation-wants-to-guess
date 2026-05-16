import { useState, useEffect } from 'react'
import { TOTAL_QUESTION, TIMER_DURATION, API_URL } from '../constants/index'


export default function useQuiz() {
    const [gameStarted, setGameStarted] = useState(false)
    const [question, setQuestion] = useState(null)
    const [questionCount, setQuestionCount] = useState(0)
    const [loading, setLoading] = useState(false)
    const [answeredInTime, setAnsweredInTime] = useState(false)
    const [highScore, setHighScore] = useState(() => {
        if (localStorage.getItem("highScore")) {
            return Number(localStorage.getItem("highScore"))
        } else
            return 0
    })

    const totalQuestion = TOTAL_QUESTION

    function onStart() {
        setGameStarted(true)
    }

    async function fetchQuestion() {
        setQuestion(null)
        setLoading(true)
        setTimeout(async () => {
            const response = await fetch('https://nwtg-api.onrender.com/questions/random');
            const data = await response.json()
            setQuestion(data)
            setLoading(false)
        }, 2000)
        setAnsweredInTime(false)
    }

    useEffect(() => {
        fetchQuestion()
    }, [])

    const [score, setScore] = useState(0)
    const [quizover, setQuizover] = useState(false)
    const [selected, setSelected] = useState(null)
    const [timer, setTimer] = useState(TIMER_DURATION)
    const [timeOver, setTimeOver] = useState(false)


    function handleCorrect() {
        const newScore = score + 1
        setScore(score + 1)
        setSelected(null)
        fetchQuestion()
        setQuestionCount(questionCount + 1)
        if (newScore > highScore) {
            setHighScore(newScore)

        }
        setTimer(TIMER_DURATION)
        setAnsweredInTime(false)
    }

    useEffect(() => {
        localStorage.setItem("highScore", highScore)
    }, [highScore])

    function handleWrong() {
        setQuizover(true)
        setTimer(TIMER_DURATION)
    }

    useEffect(() => {
        if (!answeredInTime) {
            if (gameStarted && !loading && question && !quizover) {
                const interval = setInterval(() => {
                    setTimer((previousTimer) => {
                        if (previousTimer === 0) {
                            setTimeOver(true)
                            clearInterval(interval)
                            return 0
                        }
                        return previousTimer - 1
                    })
                }, 1000)
                return () => clearInterval(interval)
            }
        }
    }, [gameStarted, loading, question, quizover, answeredInTime])

    return {
    gameStarted,
    question,
    questionCount,
    loading,
    answeredInTime,
    highScore,
    totalQuestion,
    score,
    setScore,
    quizover,
    setQuizover,
    selected,
    setSelected,
    timer,
    setTimer,
    timeOver,
    setTimeOver,
    fetchQuestion,
    handleCorrect,
    handleWrong,
    onStart,
    setAnsweredInTime,
    setQuestionCount,
}
}
