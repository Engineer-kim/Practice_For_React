import { useState } from "react";

export default function ConfingureCounter({ handleSetCount }){
    const [entererdNumber , setEnteredNumber] = useState(0)

    function handleChange(event){
        setEnteredNumber(+event.target.value)
    }

    function handleSetClick(){
        handleSetCount(entererdNumber)
        setEnteredNumber(0)
    }

    return (
        <section id="configure-counter">
            <h2>Set Counter</h2>
            <input type="number" onChange={handleChange} value={entererdNumber}></input>
            <button onClick={handleSetClick}>Set</button>
        </section>
    )
}