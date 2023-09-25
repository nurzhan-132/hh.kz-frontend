'use client'
import { useState } from "react";


export default function Test() {
    const [counter, setCounter] = useState(10); 

    const increment = () => {
        setCounter(counter+1);
    }
    const decrement = () => {
        setCounter(counter-1);
    }
    return (
        <div>
            <div>Test component</div>
            <h1>{counter}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}