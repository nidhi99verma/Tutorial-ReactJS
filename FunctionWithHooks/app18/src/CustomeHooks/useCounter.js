import {useState} from 'react'

function useCounter(initialCount = 0, value) {  //default 0 , u can set by passing value

    const [count, setCount] = useState(initialCount)

    const incrementCount = () => {
        setCount(prevCount => prevCount + value)
    }

    const dcrementCount = () => {
        setCount(prevCount => prevCount - value)
    }

    const reset = () => {
        setCount(initialCount)
    }

    return [count, incrementCount, dcrementCount, reset]
}

export default useCounter
