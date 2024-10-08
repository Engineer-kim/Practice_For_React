import QuestionTimer from "./QuestionTimer"
import Answer from "./Answer"
import { useState ,useEffect } from "react"
import QUESTIONS from '../questions'

export default function Question({ index, onSelectAnswer,
    onSkipAnswer
}) {

    const [answer, setAnswer] = useState({
        selecteAnswer: '',
        isCorrect: null
    })

    let timer = 10000;

    if (answer.answerState) {
        timer = 1000
    }
    if (answer.isCorrect !== null) {
        timer = 2000
    }

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (answer.selecteAnswer === '') {
                onSkipAnswer();
            }
        }, timer);

        return () => clearTimeout(timeoutId);
    }, [answer.selecteAnswer, onSkipAnswer, timer]);



    function handleSelectAnswer(answer) {
        setAnswer({
            selecteAnswer: answer,
            isCorrect: null
        })

        setTimeout(() => {
            setAnswer({
                selecteAnswer: answer,
                isCorrect: QUESTIONS[index].answers[0] === answer
            })

            setTimeout(() => {
                onSelectAnswer(answer)
            }, 2000)

        }, 1000)
    }

    let answerState = ''

    if (answer.selecteAnswer && answer.isCorrect !== null) {
        answerState = answer.isCorrect ? 'correct' : 'wrong'
    } else if (answer.selecteAnswer) {
        answerState = 'answered'
    }

    return (
        <div>
            <div id="question">
                <QuestionTimer
                    key={timer}
                    timeout={timer}
                    onSkipAnswer={answer.selecteAnswer === '' ? onSkipAnswer : null}
                    mode={answerState} />
                <h2>{QUESTIONS[index].text}</h2>
                <Answer
                    answers={QUESTIONS[index].answers}
                    selecteAnswer={answer.selecteAnswer}
                    answerState={answerState}
                    onSelect={handleSelectAnswer} />
            </div>
        </div>
    )
}