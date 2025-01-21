"use client"
import { useState } from "react";
export default function Page() {
  const [count, setCount] = useState(0)
  const increment = () => {setCount(count + 1)}
  const [ncount, unCount] = useState(0)
  const unincrement = () => {unCount(ncount - 1)}
  return (
    <div>
      <h1 className="text-3xl">
      {count},{ncount}
      </h1>
      <button onClick={increment}>UP</button>
      <button onClick={unincrement}>Down</button>
    </div>
  );
}