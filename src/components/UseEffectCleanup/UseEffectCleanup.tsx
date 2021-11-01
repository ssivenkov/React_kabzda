import React, { useEffect, useState } from "react";
import s from "./UseEffectCleanup.module.css";

export const UseEffectCleanup = () => {
    const [counter, setCounter] = useState(1);

    console.log("Component rendered with: " + counter)

    useEffect(() => {
        console.log("Effect occurred: " + counter)

        return () => {
            console.log("RESET EFFECT: " + counter)
        }
    }, [counter])

    const increase = () => {
        setCounter(counter + 1)
    }

    return <div className={s.container}>
        <span>UseEffect cleanup</span>
        <div>
            <span>Counter: {counter}</span>
            <button onClick={increase}>+</button>
        </div>
    </div>
}