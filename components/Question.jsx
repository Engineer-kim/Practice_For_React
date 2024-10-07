import QuestionTimer from "./QuestionTimer"
import Answer from "./Answer"

export default function Question({  questionText , answers, onSelectAnswer , selecteAnswer ,answerState,
    onSkipAnswer
}) {

    return (
        <div>
            <div id="question">
                <QuestionTimer timeout={1000} onSkipAnswer={onSkipAnswer} />
                <h2>{questionText}</h2>
                <Answer
                    answers={answers} 
                    selecteAnswer={selecteAnswer}
                    answerState={answerState}
                    onSelect={onSelectAnswer} />
            </div>
        </div>
    )
}