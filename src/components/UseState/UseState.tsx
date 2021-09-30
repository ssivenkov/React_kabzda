import React, { useState } from "react";
import s from "./UseState.module.css";

function generateData() {
  return 329876595492
}

export const UseState = () => {
  console.log("UseState render");

  const [counter, setCounter] = useState(generateData);

  const changer = (state: number) => {
    return state + 1
  }

  return <div className={s.container}>
    <span>useState</span>
    <div>
      <button onClick={() => setCounter(changer)}>inc</button>
    </div>
    {counter}
  </div>
}