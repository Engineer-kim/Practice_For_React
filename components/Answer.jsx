
import { useRef } from "react";

export default function Answer({answers , selecteAnswer, answerState , onSelect}) {
    const shuffleAnswers = useRef();

    if (!shuffleAnswers.current) {
        shuffleAnswers.current = [...answers]
        shuffleAnswers.current.sort(() => Math.random() - 0.5);
    }

    return (
        <ul id="answers">
            {shuffleAnswers.current.map((answer) => {
                const isSelected = selecteAnswer === answer
                let cssClass = '';
                if (answerState === 'answered' && isSelected) {
                    cssClass = 'selected'
                }
                if ((answerState === 'correct' || answerState === 'wrong') && isSelected) {
                    cssClass = answerState
                }


                return (
                    <li key={answer} className="answer">
                        <button onClick={() => onSelect(answer)} className={cssClass} disabled={answerState !== ''}>{answer}</button>
                    </li>
                )
            }
            )}
        </ul>
    )
}