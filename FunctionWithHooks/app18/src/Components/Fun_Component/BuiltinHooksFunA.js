import React, {useState} from 'react'

function BuiltinHooksFunA() {

    const [count, setCount] = useState(0)

    const incrementCount = () => {
        setCount(prevCount => prevCount + 1)
    }
    const dcrementCount = () => {
        setCount(prevCount => prevCount - 1)
    }
    const reset = () => {
        setCount(0)
    }

    return (
        <div>
            <h6>Count : {count}</h6>
            <button onClick={incrementCount}>Increment Count</button>
            <button onClick={dcrementCount}>Decrement Count</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default BuiltinHooksFunA
