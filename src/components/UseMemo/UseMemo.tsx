import React, { useMemo, useState } from "react";
import s from "./UseMemo.module.css";

export const UseMemo = () => {
  const [a, setA] = useState<number>(5)
  const [b, setB] = useState<number>(5)

  let resultA = 1;
  let resultB = 1;

  resultA = useMemo(() => {
    let tempResultA = 1;
    for (let i = 1; i <= a; i++) {
      /*let fake = 0;
       while(fake < 100000000) {
       fake++;
       const fakeValue = Math.random();
       }*/
      tempResultA = tempResultA * i;
    }
    console.log("First field was changed");
    return tempResultA;
  }, [a]);

  resultB = useMemo(() => {
    let tempResultB = 1;
    for (let i = 1; i <= b; i++) {
      tempResultB = tempResultB * i;
    }
    console.log("Second field was changed");
    return tempResultB;
  }, [b]);

  const setValueA = (e: any) => {
    setA(Number(e.currentTarget.value));
  }

  const setValueB = (e: any) => {
    setB(+e.currentTarget.value);
  }

  return <div className={s.container}>
    <div>useMemo. Find factorial:</div>
    <input value={a} onChange={setValueA}/>
    <input value={b} onChange={setValueB}/>
    <div>
      Result for a: {resultA}
    </div>
    <div>
      Result for b: {resultB}
    </div>
  </div>
}