import React, { useEffect, useState } from "react";
import s from "./UseEffectAsyncClock.module.css";

export const UseEffectAsyncClock = () => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const clockID = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(clockID)
    }
  }, [])

  const get2digitsString = (num: number) => num < 10 ? "0" + num : num

  return <div className={s.container}>
    <span>useEffect async clock</span>
    <div>
      <span>{get2digitsString(date.getHours())}:</span>
      <span>{get2digitsString(date.getMinutes())}:</span>
      <span>{get2digitsString(date.getSeconds())}</span>
    </div>
  </div>
}