import React, { useEffect, useState } from "react";
import s from "./UseEffectAsyncClock.module.scss";

type UseEffectAsyncClockPropsType = {
    mode: "digital" | "analog"
}

export const UseEffectAsyncClock = (props: UseEffectAsyncClockPropsType) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const clockID = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(clockID);
        }
    }, [])

    const get2digitsString = (num: number) => num < 10 ? "0" + num : num;

    let view;

    switch (props.mode) {
        case "analog":
            view = <DigitalClockView get2digitsString={get2digitsString} date={date}/>
            break;
        case "digital":
        default:
            view = <AnalogClockView get2digitsString={get2digitsString} date={date}/>
    }

    return <div className={s.container}>
        {view}
    </div>
}

type ClockViewPropsType = {
    get2digitsString: (num: number) => void
    date: Date
}

export const AnalogClockView: React.FC<ClockViewPropsType> = ({get2digitsString, date}) => {
    const secondsStyle = {
        transform: `rotate(${date.getSeconds() * 6}deg)`,
    };
    const minutesStyle = {
        transform: `rotate(${date.getMinutes() * 6}deg)`,
    };
    const hoursStyle = {
        transform: `rotate(${date.getHours() * 30}deg)`,
    };

    return <>
        <span>useEffect async analog clock</span>
        <div className={s.clock}>
            <div className={s.analogClock}>
                <div className={`${s.dial} ${s.seconds}`} style={secondsStyle}/>
                <div className={`${s.dial} ${s.minutes}`} style={minutesStyle}/>
                <div className={`${s.dial} ${s.hours}`} style={hoursStyle}/>
            </div>
        </div>
    </>
}

export const DigitalClockView: React.FC<ClockViewPropsType> = ({get2digitsString, date}) => {
    return <>
        <span>useEffect async digital clock</span>
        <div>
            <span>{get2digitsString(date.getHours())}:</span>
            <span>{get2digitsString(date.getMinutes())}:</span>
            <span>{get2digitsString(date.getSeconds())} </span>
        </div>
    </>
}