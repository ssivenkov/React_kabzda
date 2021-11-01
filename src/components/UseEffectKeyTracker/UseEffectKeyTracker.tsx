import React, { useEffect, useState } from "react";
import s from "../UseEffectAsyncClock/UseEffectAsyncClock.module.scss";

export const KeysTracker = () => {
    const [text, setText] = useState("");
    const [tracking, setTracking] = useState(true);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key);
            setText((state) => state + e.key);
        }

        if (tracking) {
            window.addEventListener("keypress", handler)
        }
        return () => {
            window.removeEventListener("keypress", handler)
        }
    }, [tracking])

    const onTracking = () => {
        setTracking(true);
    }

    const offTracking = () => {
        setTracking(false);
    }

    const onStyle = {
        cursor: "pointer",
        backgroundColor: tracking ? "green" : "white",
    }
    const offStyle = {
        cursor: "pointer",
        backgroundColor: tracking ? "white" : "red",
    }

    return <div className={s.container}>
        <span>UseEffect keys tracker</span>
        <div>
            <button style={onStyle} onClick={onTracking}>on tracking</button>
            <button style={offStyle} onClick={offTracking}>off tracking</button>
            <div>Typed text: {text}</div>
        </div>
    </div>
}