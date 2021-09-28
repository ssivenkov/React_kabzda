import React, { useState } from "react";
import s from "./ReactMemo.module.css"

const CounterSecret = (props: { count: number }) => {
  console.log("Counter render");
  return <div>{props.count}</div>
}

const UsersSecret = (props: { users: Array<string> }) => {
  console.log("Users render");
  return <div>
    {props.users.map((u, i) => <div key={i}>{u}</div>)}
  </div>
}

const Counter = React.memo(CounterSecret);
const Users = React.memo(UsersSecret);

export const ReactMemo = () => {
  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState(["Dimych", "Valera", "Artem"]);

  const addUser = () => {
    const newUsers = [...users, `Sveta ${new Date().getTime()}`];
    setUsers(newUsers);
  }

  return <div className={s.container}>
    <span>React.Memo</span>
    <div>
      <button onClick={() => setCounter(counter + 1)}>inc</button>
      <button onClick={addUser}>add user</button>
    </div>
    <Counter count={counter}/>
    <Users users={users}/>
  </div>
}