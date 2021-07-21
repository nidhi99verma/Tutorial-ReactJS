import React, {useState, useRef, useEffect} from 'react'

function UseRefTimerFun() {

    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)
        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])

    return (
        <div>
            Time : {timer}
            <button onClick={() => clearInterval(intervalRef.current)}>Clear Time</button>
        </div>
    )
}

export default UseRefTimerFun

//useRef can hold a referencwe to DOM node using the ref attribute it can also be use to store anu muteable 
//value, great thing about useRef is that value will persist through rerende while also not causing any additional
//rerenders when its value changes so to solve the problem at hand we will use the useRef hook 

//use to create generic container which can hold a mutable value similar to instance properties on class component
//this genric container does not cause rerender when data stores is changes at the same time it also remembers
//the stored data even after other state variables caused a rerender of this component

//useImperativeHandle
//useLayoutEffect
//useDebugValue