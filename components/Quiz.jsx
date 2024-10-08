import { useState, useCallback } from "react"

import QUESTIONS from '../questions.js'
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex =  userAnswers.length
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length  //activeQuestionIndex  === QUESTIONS.length 이게 True 인지 False 인지반환


    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((prevUserAnswer) => {
            return [...prevUserAnswer, selectedAnswer];
        });
    }, [])

    const handleSkipAnsewer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer])

    if (quizIsComplete) {
        return <Summary userAnswers={userAnswers}/>
    }

    if (activeQuestionIndex < QUESTIONS.length) {
        return (
            <div id="quiz">
                <Question
                    key={activeQuestionIndex}
                    index = {activeQuestionIndex}
                    onSelectAnswer={handleSelectAnswer}
                    onSkipAnswer={handleSkipAnsewer}
                />
            </div>
        )
    }
    return null; 
}