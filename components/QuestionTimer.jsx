import { useState, useEffect } from "react"

export default function QuestionTimer({ timeout, onTimeout }) {

    const [remainingTime, setRemainTime] = useState(timeout);

    useEffect(() => {
        const timer = setTimeout(onTimeout, timeout)
        return () => {
            clearInterval(timer)
        }
    }, [onTimeout, timeout])



    useEffect(() => {
        const interval = setInterval(() => {
            setRemainTime(prevRemainingTime => prevRemainingTime - 100)
        }, 100)
        return () => {
            clearInterval(interval)
        }
    }, [])



    return (
        <>
            <progress id="question-time" max={timeout} value={remainingTime} />

        </>

    )
}