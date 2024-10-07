import { useState } from "react"

import QUESTIONS from '../questions.js'
import quizCompleteImage from '../src/assets/quiz-complete.png'

export default function Quiz() {
    const [userAnswer, setuserAnswer] = useState([]);

    const activeQuestionIndex = userAnswer.length


    const  quizIsComplete = activeQuestionIndex  === QUESTIONS.length  //activeQuestionIndex  === QUESTIONS.length 이게 True 인지 False 인지반환


    function handleSelectAnswer(selectedAnswer) {
        setuserAnswer((prevUserAnswer) => {
            return [...prevUserAnswer, selectedAnswer];
        });
    }

    if(quizIsComplete){
        return <div id="summary">
            <img src={quizCompleteImage} alt="Complete Img"/>
            <h2> Quiz Completed </h2>
        </div>
    }

    
    const shuffleAnswers = [...QUESTIONS[activeQuestionIndex].answers]
    shuffleAnswers.sort(()=> Math.random() - 0.5);


    return (
        <div id="quiz">
            <div id="question">
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id="answers">
                    {shuffleAnswers.map((answer) => (
                        <li key={answer} className="answer">
                            <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}