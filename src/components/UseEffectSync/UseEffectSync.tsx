import React, { useEffect, useState } from "react";
import s from "./UseEffectSync.module.css";

function generateData() {
  return 329876595492
}

export const UseEffectSync = () => {
  const [counter, setCounter] = useState(generateData);

  useEffect(() => {
    console.log("UseEffect sync render");
  })

  return <div className={s.container}>
    <span>useEffect sync</span>
    <div>
      <button onClick={() => setCounter(counter + 1)}>inc</button>
    </div>
    {counter}
  </div>
}