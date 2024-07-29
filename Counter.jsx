import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);
    const [increase, setIncrease] = useState(1);
    function increment() {
        setCount(count + increase);
    }
    function decrement() {
        setCount(count - increase);
    }

    function increaseNumber() {
        setIncrease(increase + 1);
    }
    function decreaseNumber() {
        setIncrease(increase - 1);
    }

    return (
        <>
            <h1>
                <h1>The value of counter is:{count}</h1>
                <button onClick={increment}>Increment Button</button>
                <button onClick={decrement}>Decrement Button</button>
            </h1>
            <h1>
                <h1>The value of number to be added is:{increase}</h1>
                <button onClick={increaseNumber}>Increase Number</button>
                <button onClick={decreaseNumber}>Decrease Number</button>
            </h1>
        </>
    )

}