import React, { useEffect, useState } from "react";
import s from "./UseEffectAsync.module.css";

function generateData() {
  return 0
}

export const UseEffectAsync = () => {
  const [counter, setCounter] = useState(generateData);

  useEffect(() => {
    setInterval(() => {
      setCounter((state) => state + 1);
    }, 1000)
  }, [])

  return <div className={s.container}>
    <span>useEffect async</span>
    <div>{counter}</div>
  </div>
}