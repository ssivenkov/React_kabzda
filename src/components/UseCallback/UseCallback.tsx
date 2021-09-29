import React, { useCallback, useMemo, useState } from "react";
import s from "./UseCallback.module.css"

const CounterSecret = (props: { count: number }) => {
  console.log("Counter render");
  return <div>{props.count}</div>
}

const BooksSecret = (props: { books: Array<string> }) => {
  return <div>
    {props.books.map((book, index) => <div key={index}>{book}</div>)}
  </div>
}

const Counter = React.memo(CounterSecret);
const Books = React.memo(BooksSecret);

export const UseCallback = () => {
  const [counter, setCounter] = useState(0);
  const [books, setBooks] = useState(["React", "Redux", "JS"]);
  console.log("LikeUseCallback");

  /* useMemo выполняет функцию useCallback
   const memorizedAddBookFromUseMemo = useMemo(() => {
   return () => {
   console.log(books);
   const newBooks = [...books, `Angular ${new Date().getTime()}`];
   setBooks(newBooks);
   }
   }, [books]) */

  const memorizedAddBookFromUseCallback = useCallback(() => {
    console.log("Books render");
    const newBooks = [...books, `Angular ${new Date().getTime()}`];
    setBooks(newBooks);
  }, [books])

  return <div className={s.container}>
    <span>useCallback</span>
    <div>
      <button onClick={() => setCounter(counter + 1)}>inc</button>
      <button onClick={memorizedAddBookFromUseCallback}>add book</button>
      {/* <Users books={books}/>  React.memo сработает */}
      {/* <Users books={books.filter(book => book.toLowerCase().indexOf("a") > -1)}/>
       React.memo не сработает т.к. filter возвращает новый массив */}
    </div>
    <Counter count={counter}/>
    <Books books={books}/>
  </div>
}