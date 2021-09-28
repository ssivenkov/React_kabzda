import React, { useMemo, useState } from "react";
import s from "./UseMemoHelpReactMemo.module.css";

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

export const UseMemoHelpReactMemo = () => {
  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState(["Dimych", "Valera", "Artem", "Katya"]);

  const filteredArray = useMemo(() => {
      const newArray = users.filter(user => user.toLowerCase().indexOf("a") > -1);
      return newArray;
    }, [users])

  const addUser = () => {
    const newUsers = [...users, `Sveta ${new Date().getTime()}`];
    setUsers(newUsers);
  }

  return <div className={s.container}>
    <span>useMemo help React.Memo</span>
    <div>
      <button onClick={() => setCounter(counter + 1)}>inc</button>
      <button onClick={addUser}>add user</button>
    </div>
    {/* <Users users={users}/>  React.memo сработает */}
    {/* <Users users={users.filter(user => user.toLowerCase().indexOf("a") > -1)}/>
     React.memo не сработает т.к. filter возвращает новый массив */}
    <Counter count={counter}/>
    <Users users={filteredArray}/>
  </div>
}