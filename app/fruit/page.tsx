"use client"
import { useState, useEffect } from "react";
import Card from "../components/Card";
export default function Page() {
  const [fruit,setFruit] = useState('fruit');
  const toBanana = () => {
    setFruit('Banana')}
  const toApple = () => {
    setFruit('Apple')}

    useEffect(() => {
      document.title =  `My fruit is ${fruit}`
    }
  )
  return (
    <div>
      <h1>
      {fruit}
      </h1>
      <button onClick={toBanana}>Banana</button>
      <button onClick={toApple}>Apple</button>
      <Card src="/01.jpg" title="Player 1"/>
      <Card src="/01.jpg" title="Player 2"/>
      <Card src="/01.jpg" title="Player 3"/>
    </div>
  );
}